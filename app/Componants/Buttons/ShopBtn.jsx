"use client";
import React from "react";
import "./ShopBtn.css";
import { toast } from "react-toastify";

const ShopBtn = ({ value, width, height, radius, id, metaData }) => {
  const handleClick = () => {
    console.log("Card data : ", metaData);
    toast.success(`Card id : ${id}`);
  };

  return (
    <button
      className="shopBtn"
      style={{
        width: width || "",
        height: height || "",
        borderRadius: radius || "10px",
      }}
      onClick={handleClick}
    >
      {value || "View all"}
    </button>
  );
};

export default ShopBtn;
