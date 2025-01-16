"use client";
import React from "react";
import "./HandMadeSketchCard.css";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

const HandMadeSketchCard = ({ image, price, type }) => {
  const [isLiked, setisLiked] = useState(false);

  const handleLike = () => {
    setisLiked(!isLiked);
  };

  return (
    <>
      <div className="HandMadeSketchCard">
        <Image src={image} alt="cardImg" priority={true} className="card-img" />
        <div className="content">
          <div className="bottom">
            <h3 className="name">Raj Artist</h3>
            <h2 className="type"> {type} </h2>
            <h3 className="price"> {price} </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default HandMadeSketchCard;
