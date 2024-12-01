"use client";
import React, { createContext, useEffect, useState } from "react";
import { apiURL } from "../constants";

export const AlbumContext = createContext();

export const AlbumProvider = ({ children }) => {
  const [album, setAlbum] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAlbum = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${apiURL}/api/drawing/getDrawings`);
      const data = await res.json();
      setAlbum(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching album:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAlbum();
  }, []);

  return (
    <AlbumContext.Provider
      value={{ isLoading, fetchAlbum, album, setAlbum, setIsLoading }}
    >
      {children}
    </AlbumContext.Provider>
  );
};

export default AlbumContext;
