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
        <div className="icon" onClick={handleLike}>
          {isLiked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="gold"
              className="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              className="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          )}
        </div>
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
