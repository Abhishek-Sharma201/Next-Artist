"use client";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import AlbumContext from "@/app/context/AlbumContext";
import Image from "next/image";
import Loader from "@/app/Componants/Loader/Loader";

const AlbumDetails = () => {
  const { album, fetchAlbum, isLoading } = useContext(AlbumContext);
  const router = useRouter();
  const [id, setId] = useState(null);

  // Use useEffect to ensure `id` is accessed after the router is mounted
  useEffect(() => {
    if (router.query.id) {
      setId(router.query.id);
    }
  }, [router.query]);

  useEffect(() => {
    if (!album.length) {
      fetchAlbum();
    }
  }, [album]);

  // Check if `id` or album data is loading
  if (isLoading || !id) {
    return <Loader />;
  }

  // Find the card in the album using the `id`
  const card = album.find((item) => item._id === id);

  if (!card) {
    return <p>Card not found</p>;
  }

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
