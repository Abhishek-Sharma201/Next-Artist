"use client";

import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import Nav from "../../Componants/Nav/Nav";
import AlbumCard from "@/app/Componants/Cards/AlbumCard";
import Footer from "@/app/Componants/Footer/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AlbumContext from "@/app/context/AlbumContext";
import Loader from "@/app/Componants/Loader/Loader";
import { apiURL } from "@/app/constants";
import { useAuth } from "@clerk/nextjs";

const AlbumPage = () => {
  const { userId } = useAuth();
  const { isLoading, album, fetchAlbum } = useContext(AlbumContext);
  const [likes, setLikes] = useState([]);

  // Fetch album and load likes from localStorage
  useEffect(() => {
    fetchAlbum();
    const storedLikes = JSON.parse(localStorage.getItem("likes")) || [];
    setLikes(storedLikes);
  }, []);

  const handleLike = async (id) => {
    if (!userId) {
      toast.error("You need to log in to like a sketch.");
      return;
    }

    try {
      // Toggle like in local state
      const updatedLikes = likes.includes(id)
        ? likes.filter((likeId) => likeId !== id)
        : [...likes, id];
      setLikes(updatedLikes);
      localStorage.setItem("likes", JSON.stringify(updatedLikes));

      // Sync with the backend
      const res = await fetch(`${apiURL}/api/like/postLike`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: userId,
          drawingId: id,
        }),
      });

      const result = await res.json();
      if (!res.ok) {
        toast.error(result.message || "Failed to update like status!");
        // Rollback local state if the backend fails
        setLikes(likes);
        localStorage.setItem("likes", JSON.stringify(likes));
      } else {
        toast.success(result.message || "Like updated!");
      }
    } catch (error) {
      console.error(`Error liking sketch: ${error.message}`);
      toast.error("An error occurred while updating the like status.");
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
                    isLiked={likes.includes(card._id)} // Check if liked
                    onLike={() => handleLike(card._id)}
                    onShare={() =>
                      handleShare({
                        text: card.type,
                        price: card.price,
                        id: card._id,
                      })
                    }
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
