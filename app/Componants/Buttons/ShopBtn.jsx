"use client";
import React from "react";
import "./ShopBtn.css";
import { toast } from "react-toastify";
import Link from "next/link";

const ShopBtn = ({
  value,
  width,
  height,
  radius,
  id,
  redirect,
  bg,
  color,
  paddingRight,
  paddingLeft,
}) => {
  const handleClick = () => {
    toast.info(`Card id : ${id}`);
  };

  return (
    <Link
      href={redirect ? redirect : ""}
      style={{
        width: width || "",
        height: height || "",
        color: color || "",
        background: bg || "",
        borderRadius: radius || "10px",
        paddingRight: paddingRight || "",
        paddingLeft: paddingLeft || "",
      }}
      className="shopBtn"
    >
      <button onClick={handleClick}>{value || "View all"}</button>
    </Link>
  );
};

export default ShopBtn;
