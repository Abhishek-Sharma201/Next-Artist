"use client";

import React, { useEffect, useState } from "react";
import { apiURL } from "@/app/constants";
import Loader from "@/app/Componants/Loader/Loader";
import { useAuth } from "@clerk/nextjs";
import Nav from "@/app/Componants/Nav/Nav";
import Footer from "@/app/Componants/Footer/Footer";
import { useRouter } from "next/navigation";
import useLikes from "@/app/hooks/useLikes"; // Import the custom hook

const LikesPage = () => {
  const router = useRouter();
  const { userId } = useAuth();

  // Use the custom hook for likes management
  const { likes, toggleLike } = useLikes(userId);

  useEffect(() => {
    // Fetch likes data when userId changes or on initial render
  }, [userId]);

  return (
    <main>
      <Nav background={true} />
      <div className="w-full h-[max-content] flex flex-col items-start justify-center gap-4 px-20 py-8">
        <h1 className="text-[1.3rem] font-[500] text-zinc-800 self-start">
          Home {">>"} Likes
        </h1>
        {likes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {likes.map((like) => (
              <div key={like._id} className="border p-4">
                <img
                  src={like.image.url || "/placeholder.jpg"}
                  alt={like.type}
                />
                <h3>{like.type}</h3>
                <p>${like.price}</p>
                <button onClick={() => toggleLike(like._id)}>Remove</button>
              </div>
            ))}
          </div>
        ) : (
          <p>No likes yet.</p>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default LikesPage;
