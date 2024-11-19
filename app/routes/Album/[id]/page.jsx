"use client";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AlbumContext from "@/app/context/AlbumContext";
import Image from "next/image";
import Loader from "@/app/Componants/Loader/Loader";

const AlbumDetails = ({ params }) => {
  const { album, fetchAlbum, isLoading } = useContext(AlbumContext);
  const [card, setCard] = useState(null);
  const router = useRouter();

  const { id } = params;

  useEffect(() => {
    if (!album.length) {
      fetchAlbum();
    } else {
      findCard();
    }
  }, [album]);

  const findCard = () => {
    const foundCard = album.find((item) => item._id === id);
    setCard(foundCard || null);
  };

  // Show loader while fetching data or finding the card
  if (isLoading || !card) {
    return <Loader />;
  }

  // Generate image source
  const imageSrc = card.image
    ? `data:${card.image.contentType};base64,${btoa(
        new Uint8Array(card.image.data.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      )}`
    : "/default-placeholder.png";

  return (
    <div className="album-details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1>{card.type}</h1>
          <Image src={imageSrc} alt={card.type} width={400} height={300} />
          <p>Price: ${card.price}</p>
          <p>ID: {card._id}</p>
          <button onClick={() => router.back()} className="back-btn">
            Go Back
          </button>
        </>
      )}
    </div>
  );
};

export default AlbumDetails;
