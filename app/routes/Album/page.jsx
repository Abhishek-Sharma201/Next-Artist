"use client";
import React, { useContext } from "react";
import "./style.css";
import Nav from "../../Componants/Nav/Nav";
import { bestSellerProcuts, trendingProcuts } from "@/app/constants";
import AlbumCard from "@/app/Componants/Cards/AlbumCard";
import Footer from "@/app/Componants/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AlbumContext from "@/app/context/AlbumContext";
import Loader from "@/app/Componants/Loader/Loader";

const albumPage = () => {
  const { isLoading, album, fetchAlbum } = useContext(AlbumContext);
  return (
    <>
      <Nav background={true} />
      <ToastContainer />
      <div className="album-section">
        <div className="head">
          <h2 className="route">Home &gt;&gt; Album</h2>
        </div>
        <div className="container">
          <section className="trending">
            <div className="type">
              <h1>Trending Products</h1>
              <button className="see-all">See All</button>
            </div>
            {isLoading ? (
              <div className="cards">
                {album.map((card) => {
                  return (
                    <AlbumCard
                      key={card.id}
                      price={card.price}
                      text={card.type}
                      img={
                        card.image
                          ? `data:${albumItem.image.contentType};base64,${btoa(
                              new Uint8Array(albumItem.image.data.data).reduce(
                                (data, byte) =>
                                  data + String.fromCharCode(byte),
                                ""
                              )
                            )}`
                          : ""
                      }
                      cardId={card._id}
                      // metaData={card.metaData}
                    />
                  );
                })}
              </div>
            ) : (
              ""
            )}
          </section>
          {/* <section className="best-seller">
            <div className="type">
              <h1>Best seller</h1>
              <button className="see-all">See All</button>
            </div>
            <div className="cards">
              {bestSellerProcuts.map((card) => {
                return (
                  <AlbumCard
                    key={card.id}
                    price={card.price}
                    text={card.text}
                    img={card.img}
                  />
                );
              })}
            </div>
          </section> */}
        </div>
        <Footer width={"100%"} />
      </div>
    </>
  );
};

export default albumPage;
