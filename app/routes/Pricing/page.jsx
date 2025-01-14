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
  const [likes, setLikes] = useState(new Set()); // Store liked drawing IDs

  useEffect(() => {
    fetchAlbum();
  }, []); // Fetch the album on mount

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
        setLikes((prevLikes) =>
          prevLikes.has(id)
            ? new Set([...prevLikes].filter((likeId) => likeId !== id))
            : new Set(prevLikes).add(id)
        );
        toast.success(result.message || "Liked successfully!");
      } else {
        toast.error(result.message || "Failed to like the sketch!");
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
                    isLiked={likes.has(card._id)} // Pass liked state
                    onLike={() => handleLike(card._id)}
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
