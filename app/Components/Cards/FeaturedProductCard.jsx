"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import ShopBtn from "../Buttons/ShopBtn";
import "./FeaturedProductCard.css";

const FeaturedProductCard = ({ cardImage, cardTitle, cardPrice }) => {
  const [isLiked, setisLiked] = useState(false);
  const handleLike = () => {
    setisLiked(!isLiked);
  };

  return (
    <div className="featuredProductCard shadow-lg">
      <div className="img-container">
        <Image
          src={cardImage}
          alt="img"
          priority={true}
          className="featuredProductCardImg"
        />
      </div>
      <div className="content">
        <h2 className="title"> {cardTitle} </h2>
        <h3 className="price"> {cardPrice} </h3>
        <ShopBtn width={"80px"} redirect={"/routes/Collection"} />
      </div>
    </div>
  );
};

export default FeaturedProductCard;
