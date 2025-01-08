"use client";

import React, { useEffect, useState } from "react";
import { apiURL } from "@/app/constants";
import Loader from "@/app/Componants/Loader/Loader";
import { useAuth } from "@clerk/nextjs"; // Assuming Clerk is used for authentication
import Nav from "@/app/Componants/Nav/Nav";
import Footer from "@/app/Componants/Footer/Footer";

const LikesPage = () => {
  const { userId } = useAuth(); // Get userId from Clerk
  const [likes, setLikes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchLikes = async () => {
    if (!userId) {
      console.error("User is not logged in.");
      setIsLoading(false);
      return;
    }

    try {
      // Pass userId directly in the URL for GET request
      const res = await fetch(`${apiURL}/api/like/getLike/${userId}`, {
        method: "GET", // GET request doesn't need a body
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch likes");
      }
      const data = await res.json();
      setLikes(data.likes || []);
      console.log(`Likes: ${likes}`);
      setIsLoading(false);
    } catch (error) {
      console.error(`Error fetching likes: ${error.message}`);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
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
            {likes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {likes.map((like) => (
                  <div key={like._id} className="border p-4">
                    <img
                      src={like.drawings[0]?.imageUrl || "/placeholder.jpg"}
                      alt={like.drawings[0]?.title || "Untitled"}
                      className="w-full h-auto"
                    />
                    <h3 className="text-lg font-bold mt-2">
                      {like.drawings[0]?.title || "Untitled"}
                    </h3>
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
