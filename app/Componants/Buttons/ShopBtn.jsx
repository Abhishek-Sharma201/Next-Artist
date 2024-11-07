"use client";
import React from "react";
import "./ShopBtn.css";
import { toast } from "react-toastify";
import Link from "next/link";

const ShopBtn = ({ value, width, height, radius, id, redirect }) => {
  const handleClick = () => {
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
      <Link href={redirect ? redirect : ""}>{value || "View all"}</Link>
    </button>
  );
};

export default ShopBtn;
