"use client";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import AlbumContext from "@/app/context/AlbumContext";
import Image from "next/image";
import Loader from "@/app/Componants/Loader/Loader";

const AlbumDetails = ({ params }) => {
  const { album, fetchAlbum, isLoading } = useContext(AlbumContext);
  const router = useRouter();
  const { id } = params.id; // Retrieve the ID from the route query

  useEffect(() => {
    if (!album.length) {
      fetchAlbum();
    }
  }, [album]);

  // Check if `id` is undefined or loading
  if (isLoading || !id) {
    return <Loader />;
  }

  // Find the card in the album using the `id`
  const card = album.find((item) => item._id === id);

  if (!card) {
    return <p>Card not found</p>;
  }

  // Construct image source
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
      <h1>{card.type}</h1>
      <Image src={imageSrc} alt={card.type} width={400} height={300} />
      <p>Price: ${card.price}</p>
      <p>ID: {card._id}</p>
      <button onClick={() => router.back()} className="back-btn">
        Go Back
      </button>
    </div>
  );
};

export default AlbumDetails;
