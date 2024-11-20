"use client";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AlbumContext from "@/app/context/AlbumContext";
import Image from "next/image";
import Loader from "@/app/Componants/Loader/Loader";
import Nav from "@/app/Componants/Nav/Nav";
import Footer from "@/app/Componants/Footer/Footer";
import Container from "@/app/Componants/Banner/Container";

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

  return (
    <>
      <Nav background={true} />
      <div className="h-full w-screen flex flex-col items-center justify-center gap-4 py-8 px-4">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Container data={card} />
          </>
        )}
      </div>
      <Footer width={"100%"} />
    </>
  );
};

export default AlbumDetails;
