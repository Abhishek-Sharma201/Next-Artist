import React from "react";
import "./Banner.css";
import Nav from "../Nav/Nav";
import { bannerImage, brushesImage, homeImage } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="page-1">
      <Image
        src={bannerImage}
        alt="BannerImg"
        priority={true}
        className="bannerImg"
      />
      <div className="container">
        <div className="left">
          <Image src={brushesImage} alt="img" className="image" />
        </div>
        <div className="mid">
          <div className="content">
            <h2>Hey I am,</h2>
            <h1>RAJ NARALKAR</h1>
            <p>
              A talented sketch artist specializes in creating 100% realistic
              handmade sketches, capturing every detail with stunning precision.
            </p>
            <Link href={"/routes/Pricing"}>
              <button>Get Now</button>
            </Link>{" "}
          </div>
        </div>
        <div className="right">
          <Image src={homeImage} alt="img" className="image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
