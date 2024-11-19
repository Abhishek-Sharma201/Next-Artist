"use client";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import AlbumContext from "@/app/context/AlbumContext";
import Image from "next/image";
import Loader from "@/app/Componants/Loader/Loader";
import "./style.css";

const AlbumDetails = () => {
  const { album, fetchAlbum, isLoading } = useContext(AlbumContext);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!album.length) {
      fetchAlbum(); // Fetch the album if not already loaded
    }
  }, []);

  const card = album.find((item) => item._id === id);

  if (isLoading || !card) {
    return <Loader />;
  }

  return (
    <div className="album-details">
      <h1>{card.type}</h1>
      <Image
        src={`data:${card.image.contentType};base64,${btoa(
          new Uint8Array(card.image.data.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        )}`}
        alt={card.type}
        width={400}
        height={300}
      />
      <p>Price: ${card.price}</p>
      <p>ID: {card._id}</p>
      <button onClick={() => router.back()} className="back-btn">
        Go Back
      </button>
    </div>
  );
};

export default AlbumDetails;
