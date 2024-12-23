"use client";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AlbumContext from "@/app/context/AlbumContext";
import Image from "next/image";
import Loader from "@/app/Componants/Loader/Loader";
import Nav from "@/app/Componants/Nav/Nav";
import Footer from "@/app/Componants/Footer/Footer";
import Container from "@/app/Componants/Banner/Container";
import ReviewBox from "@/app/Componants/Banner/ReviewBox";
import { ReviewContext } from "@/app/context/ReviewContext";
import { ToastContainer } from "react-toastify";

const AlbumDetails = ({ params }) => {
  const { reviews, fetchReviews, r_isLoading, error } =
    useContext(ReviewContext);

  const { album, fetchAlbum, isLoading } = useContext(AlbumContext);
  const [card, setCard] = useState(null);

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

  useEffect(() => {
    fetchReviews(id);
    console.log(`Review Data: ${JSON.stringify(reviews)}`);
  }, [id]);

  // if (isLoading || !card) {
  //   return <Loader />;
  // }

  return (
    <div className="flex flex-col items-start justify-center">
      <ToastContainer />
      <Nav background={true} />
      <div className="h-full w-full flex flex-col items-start justify-center gap-4 py-8 px-8 lg:px-20 overflow-hidden">
        <div className="h-[10dvh] flex flex-col items-start justify-center">
          <h2 className="text-center font-[600] text-[1.3rem] text-zinc-800">
            {card?.type}
          </h2>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="flex flex-col items-center justify-center h-[max-content] w-full gap-4">
            <Container data={card} />
            {r_isLoading ? <Loader /> : <ReviewBox data={reviews} id={id} />}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AlbumDetails;
