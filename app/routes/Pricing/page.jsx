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
    fetchAlbum();
    if (userId) {
      fetchUserLikes(); // Fetch likes from the database on component mount
    }
  }, [userId]); // Refetch likes when userId changes

  const fetchUserLikes = async () => {
    try {
      const res = await fetch(`${apiURL}/api/like/getLike/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: userId }), // Pass the logged-in user ID
      });

      if (res.ok) {
        const result = await res.json();
        setLikes(result?.drawings || []); // Set the `drawings` array in the state
      } else {
        console.error("Failed to fetch likes");
      }
    } catch (error) {
      console.error(`Error fetching likes: ${error.message}`);
    }
  };

  const handleShare = async (data) => {
    const message = `Check out this amazing sketch: ${data.text}, priced at $${data.price}.`;

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
        toast.success(result.message || "Action successful!");

        // Update the likes state
        setLikes(
          (prevLikes) =>
            prevLikes.includes(id)
              ? prevLikes.filter((likeId) => likeId !== id) // Unlike
              : [...prevLikes, id] // Like
        );
      } else {
        toast.error(result.message || "Failed to update like!");
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
