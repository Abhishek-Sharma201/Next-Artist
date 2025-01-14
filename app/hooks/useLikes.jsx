import { useState, useEffect } from "react";
import { apiURL } from "@/app/constants";
import { toast } from "react-toastify";

const useLikes = (userId) => {
  const [likes, setLikes] = useState([]);

  // Fetch likes from localStorage and the backend
  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem("likes")) || [];
    setLikes(storedLikes);

    if (userId) {
      fetchLikesFromBackend(userId);
    }
  }, [userId]);

  const fetchLikesFromBackend = async (userId) => {
    try {
      const res = await fetch(`${apiURL}/api/like/getLike/${userId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch likes from backend");
      }

      const data = await res.json();
      setLikes(data.likes || []);
    } catch (error) {
      console.error(`Error fetching likes: ${error.message}`);
    }
  };

  const updateLikes = (updatedLikes) => {
    setLikes(updatedLikes);
    localStorage.setItem("likes", JSON.stringify(updatedLikes));
  };

  const toggleLike = async (drawingId) => {
    if (!userId) {
      toast.error("You need to log in to like a sketch.");
      return;
    }

    const updatedLikes = likes.includes(drawingId)
      ? likes.filter((likeId) => likeId !== drawingId)
      : [...likes, drawingId];

    // Update locally
    updateLikes(updatedLikes);

    try {
      const res = await fetch(`${apiURL}/api/like/postLike`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: userId,
          drawingId,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.message || "Failed to update like status!");
        // Rollback local state if backend fails
        updateLikes(likes);
      } else {
        toast.success(result.message || "Like updated!");
      }
    } catch (error) {
      console.error(`Error toggling like: ${error.message}`);
      toast.error("An error occurred while updating the like status.");
    }
  };

  return {
    likes,
    toggleLike,
  };
};

export default useLikes;
