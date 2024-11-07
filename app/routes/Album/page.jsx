"use client";
import React, { useContext, useEffect } from "react";
import "./style.css";
import Nav from "../../Componants/Nav/Nav";
import AlbumCard from "@/app/Componants/Cards/AlbumCard";
import Footer from "@/app/Componants/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AlbumContext from "@/app/context/AlbumContext";
import Loader from "@/app/Componants/Loader/Loader";

const albumPage = () => {
  const { isLoading, album, fetchAlbum } = useContext(AlbumContext);

  useEffect(() => {
    // fetchAlbum();
    console.log(album);
  }, []);
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
              <h1>All Sketches</h1>
              {/* <button className="see-all">See All</button> */}
              <input
                type="text"
                name="filter"
                id="filter"
                placeholder="Filter"
                className="h-[5dvh] w-[250px] p-2 border-[.5px] bg-[#fff] border-zinc-700 text-zinc-900 font-medium text-[.8rem] placeholder:text-zinc-900 rounded-md"
              />
            </div>
            {isLoading ? (
              <Loader />
            ) : (
              <div className="cards">
                {album.map((card) => {
                  return (
                    <AlbumCard
                      key={card.id}
                      price={card.price}
                      text={card.type}
                      img={
                        card.image
                          ? `data:${card.image.contentType};base64,${btoa(
                              new Uint8Array(card.image.data.data).reduce(
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
            )}
          </section>
        </div>
        <Footer width={"100%"} />
      </div>
    </>
  );
};

export default albumPage;
