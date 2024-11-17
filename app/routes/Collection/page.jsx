"use client";

import Nav from "@/app/Componants/Nav/Nav";
import { imageCollection } from "@/app/utils";
import Image from "next/image";
import React, { useContext } from "react";
import "./style.css";
import Footer from "@/app/Componants/Footer/Footer";
import AlbumContext from "@/app/context/AlbumContext";
import Loader from "@/app/Componants/Loader/Loader";

const page = () => {
  const { album, fetchAlbum, isLoading } = useContext(AlbumContext);

  React.useEffect(() => {
    fetchAlbum();
    console.log(album);
  });

  return (
    <>
      <Nav background={true} />
      <div className="collection-wrapper">
        <div className="head">
          <h2>Home {">>"} Collection</h2>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="collection-gallery">
            {album.map((v, i) => {
              return (
                <div className="box" key={i}>
                  <Image
                    src={v}
                    loading="lazy"
                    alt="collection-img"
                    className="collection-image"
                  />
                </div>
              );
            })}
          </div>
        )}
        <Footer width={"100%"} />
      </div>
    </>
  );
};

export default page;
