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
      // Fetch the user's liked drawings
      const res = await fetch(`${apiURL}/api/like/getLike/${userId}`, {
        method: "GET", // GET request doesn't need a body
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch likes");
      }

      const data = await res.json();
      setLikes(data.likes || []);
      setIsLoading(false);

      // Now fetch all drawings
      const drawingsRes = await fetch(`${apiURL}/api/drawing/getDrawing`);
      const drawingsData = await drawingsRes.json();

      // Filter drawings based on the liked drawing IDs
      const likedDrawings = drawingsData.data.filter((drawing) =>
        data.likes?.drawings.includes(drawing._id)
      );

      // Update state with the filtered liked drawings
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
                  <div key={drawing._id} className="border p-4">
                    <img
                      src={drawing.image.url || "/placeholder.jpg"} // Use the correct path to the image
                      alt={drawing.type || "Untitled"} // Use 'type' for the title
                      className="w-full h-auto"
                    />
                    <h3 className="text-lg font-bold mt-2">
                      {drawing.type || "Untitled"}
                    </h3>{" "}
                    {/* Display the type */}
                    <p className="text-sm text-gray-500">
                      Price: ${drawing.price}
                    </p>{" "}
                    {/* Display the price */}
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
