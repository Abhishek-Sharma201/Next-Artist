import React from "react";
import "./Banner.css";
import Nav from "../Nav/Nav";
import { bannerImage, brushesImage, homeImage } from "@/app/utils";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="page-1">
      <Image
        src={bannerImage}
        alt="BannerImg"
        priority={true}
        className="bannerImg"
      />
      <Nav background={false} />
      <div className="container">
        <div className="left">
          <Image src={brushesImage} alt="img" className="image" />
        </div>
        <div className="mid">
          <div className="content">
            <h2>Hey I am,</h2>
            <h1>RAJ NARALKAR</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              repudiandae sunt unde expedita debitis molestiae enim blanditiis
              voluptates assumenda repellat?
            </p>
            <button>Shop Now</button>
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
