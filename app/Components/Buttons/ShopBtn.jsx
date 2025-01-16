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
      <button>{value || "View all"}</button>
    </Link>
  );
};

export default ShopBtn;
