import Nav from "@/app/Componants/Nav/Nav";
import { imageCollection } from "@/app/utils";
import Image from "next/image";
import React from "react";
import "./style.css";
import Footer from "@/app/Componants/Footer/Footer";

const page = () => {
  return (
    <>
      <Nav background={true} />
      <div className="collection-wrapper">
        <div className="head">
          <h2>Home {">>"} Collection</h2>
        </div>
        <div className="collection-gallery">
          {imageCollection.map((v, i) => {
            return (
              <div className="box" key={i}>
                <Image src={v}loading="lazy" alt="collection-img" className="collection-image" />
              </div>
            );
          })}
        </div>
        <Footer width={"100%"} />
      </div>
    </>
  );
};

export default page;
