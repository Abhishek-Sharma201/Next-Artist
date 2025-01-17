"use client";

import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import Nav from "../../Components/Nav/Nav";
import AlbumCard from "@/app/Components/Cards/AlbumCard";
import Footer from "@/app/Components/Footer/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AlbumContext from "@/app/context/AlbumContext";
import Loader from "@/app/Components/Loader/Loader";
import { apiURL } from "@/app/constants";
import { useAuth } from "@clerk/nextjs";

const AlbumPage = () => {
  const { userId } = useAuth();
  const [likes, setLikes] = useState([]);
  const { isLoading, album, fetchAlbum } = useContext(AlbumContext);

  useEffect(() => {
    console.log("Fetching albums...");
    fetchAlbum();
    if (userId) {
      console.log("Fetching user likes for userId:", userId);
      fetchUserLikes();
    }
  }, [userId]); // Triggered on `userId` change

  const fetchUserLikes = async () => {
    try {
      console.log("Making API call to fetch likes...");
      const res = await fetch(`${apiURL}/api/like/getLike/${userId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        const result = await res.json();
        console.log("Fetched likes data:", result);
        setLikes(result?.drawings || []);
      } else {
        console.error("Failed to fetch likes:", res.status);
      }
    } catch (error) {
      console.error(`Error fetching likes: ${error.message}`);
    }
  };

  const handleShare = async (data) => {
    console.log("Sharing sketch data:", data);

    const message = `Check out this amazing sketch: ${data.text}, priced at ₹${data.price}.`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Amazing Sketch!",
          text: message,
          url: window.location.href,
        });
        toast.success("Content shared successfully!");
      } catch (error) {
        console.error("Error sharing content:", error);
        toast.error("Failed to share content!");
      }
    } else {
      toast.error("Sharing is not supported in your browser.");
    }
  };

  const handleLike = async (id) => {
    if (!userId) {
      toast.error("You need to log in to like a sketch.");
      return;
    }

    console.log("Handling like for drawingId:", id);

    try {
      const res = await fetch(`${apiURL}/api/like/postLike`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: userId,
          drawingId: id,
        }),
      });

      const result = await res.json();
      if (res.ok) {
        console.log("Like API response:", result);

        toast.success(result.message || "Action successful!");

        // Update the likes state
        setLikes((prevLikes) => {
          const updatedLikes = prevLikes.includes(id)
            ? prevLikes.filter((likeId) => likeId !== id) // Unlike
            : [...prevLikes, id]; // Like
          console.log("Updated likes array:", updatedLikes);
          return updatedLikes;
        });
      } else {
        toast.error(result.message || "Failed to update like!");
        console.error("Error response from like API:", result);
      }
    } catch (error) {
      console.error(`Error liking sketch: ${error.message}`);
      toast.error("An error occurred while liking the sketch.");
    }
  };

  return (
    <>
      <Nav background={true} />
      <div className="album-section">
        <div className="head">
          <h2 className="route">Home &gt;&gt; Album</h2>
        </div>
        <div className="container">
          <section className="trending">
            <div className="type">
              <h1>All Sketches</h1>
              <input
                type="text"
                name="filter"
                id="filter"
                placeholder="Filter"
                className="h-[5dvh] w-[250px] p-2 border-[.5px] bg-[#fff] border-zinc-700 text-zinc-900 font-medium text-[.8rem] placeholder:text-zinc-900 rounded-md"
              />
            </div>
            {isLoading ? (
              <Loader />
            ) : (
              <div className="cards">
                {album.map((card) => (
                  <AlbumCard
                    key={card._id}
                    price={card.price}
                    text={card.type}
                    img={card.image?.url || ""}
                    cardId={card._id}
                    onShare={() =>
                      handleShare({
                        text: card.type,
                        price: card.price,
                        id: card._id,
                      })
                    }
                    onLike={() => handleLike(card._id)}
                    isLiked={likes.includes(card._id)} // Pass liked state
                  />
                ))}
              </div>
            )}
          </section>
        </div>
        <Footer width={"100%"} />
      </div>
      <ToastContainer />
    </>
  );
};

export default AlbumPage;
