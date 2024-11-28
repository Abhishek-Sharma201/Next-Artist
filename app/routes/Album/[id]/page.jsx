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

  if (isLoading || !card) {
    return <Loader />;
  }

  return (
    <>
      <Nav background={true} />
      <div className="h-full w-full flex flex-col items-start justify-center gap-4 py-8 px-8 overflow-hidden">
        <div className="h-[10dvh] flex flex-col items-start justify-center">
          <h2 className="text-center font-[600] text-[1.3rem] text-zinc-800">
            Home &gt;&gt; Album &gt;&gt; {card.type}
          </h2>
        </div>
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
