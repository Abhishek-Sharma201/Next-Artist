"use client";

import React, { useContext, useEffect } from "react";
import "./style.css";
import Nav from "../../Componants/Nav/Nav";
import AlbumCard from "@/app/Componants/Cards/AlbumCard";
import Footer from "@/app/Componants/Footer/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AlbumContext from "@/app/context/AlbumContext";
import Loader from "@/app/Componants/Loader/Loader";
import { useAuth } from "@clerk/nextjs";
import useLikes from "@/app/hooks/useLikes"; // Import the custom hook

const AlbumPage = () => {
  const { userId } = useAuth();
  const { isLoading, album, fetchAlbum } = useContext(AlbumContext);

  // Use the custom hook for likes management
  const { likes, toggleLike } = useLikes(userId);

  // Fetch album data
  useEffect(() => {
    fetchAlbum();
  }, [fetchAlbum]);

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
                    onLike={() => toggleLike(card._id)} // Use the custom hook's toggleLike
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
