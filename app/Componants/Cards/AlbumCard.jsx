"use client";
import Image from "next/image";
import React from "react";
import "./AlbumCard.css";
import ShopBtn from "../Buttons/ShopBtn";

const AlbumCard = ({ text, price, img, cardId, metaData, onShare }) => {
  return (
    <div className="trendingCard">
      <div className="imgContainer">
        <div className="like-share">
          <button onClick={onShare}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-share"
              viewBox="0 0 16 16"
            >
              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
            </svg>
          </button>
          <div className="line"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
          </svg>
        </div>
        <Image loading="lazy" alt="albumcarimg" className="cardImg" src={img} />
      </div>
      <div className="content">
        <div className="price">
          current price
          <h3>{price}</h3>
        </div>
        <h2 className="text">{text}</h2>
        <ShopBtn
          id={cardId}
          width={"100%"}
          height={"7dvh"}
          metaData={metaData}
          value={"Get"}
        />
      </div>
    </div>
  );
};

export default AlbumCard;
