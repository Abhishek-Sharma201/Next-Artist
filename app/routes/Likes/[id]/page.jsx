"use client";

import React, { useEffect, useState } from "react";
import { apiURL } from "@/app/constants";
import Loader from "@/app/Componants/Loader/Loader";
import { useAuth } from "@clerk/nextjs";
import Nav from "@/app/Componants/Nav/Nav";
import Footer from "@/app/Componants/Footer/Footer";

const LikesPage = () => {
  const { userId } = useAuth();
  const [likes, setLikes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchLikes = async () => {
    if (!userId) {
      console.error("User is not logged in.");
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch(`${apiURL}/api/like/getLike/${userId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch likes");
      }

      const data = await res.json();
      setLikes(data.likes || []);
      setIsLoading(false);

      const drawingsRes = await fetch(`${apiURL}/api/drawing/getDrawings`);
      const drawingsData = await drawingsRes.json();

      const likedDrawings = drawingsData.data.filter((drawing) =>
        data.likes?.drawings.includes(drawing._id)
      );

      setLikes((prevLikes) => ({
        ...prevLikes,
        drawings: likedDrawings,
      }));
    } catch (error) {
      console.error(`Error fetching likes: ${error.message}`);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteLike = async (drawingId) => {
    try {
      const res = await fetch(`${apiURL}/api/like/deleteLike`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, drawingId }),
      });

      if (!res.ok) {
        throw new Error("Failed to delete like");
      }

      const data = await res.json();
      console.log(data.message);

      // Refresh likes after deletion
      fetchLikes();
    } catch (error) {
      console.error(`Error deleting like: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchLikes();
  }, [userId]);

  return (
    <main>
      <Nav background={true} />

      <div className="w-full h-[max-content] flex flex-col items-start justify-center gap-4 px-20 py-8">
        <h1 className="text-[1.3rem] font-[500] text-zinc-800 self-start">
          Home {">>"} Likes
        </h1>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {likes.drawings && likes.drawings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {likes.drawings.map((drawing) => (
                  <div key={drawing?._id} className="border p-4">
                    <img
                      src={drawing?.image?.url || "/placeholder.jpg"}
                      alt={drawing?.type || "Untitled"}
                      className="w-full h-auto"
                    />
                    <h3 className="text-lg font-bold mt-2">
                      {drawing?.type || "Untitled"}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Price: ${drawing?.price}
                    </p>
                    <button
                      onClick={() => handleDeleteLike(drawing._id)}
                      className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete Like
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-red-600">
                You have not liked any drawings yet.
              </p>
            )}
          </>
        )}
      </div>

      <Footer />
    </main>
  );
};

export default LikesPage;
