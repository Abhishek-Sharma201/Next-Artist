"use client";

import React, { createContext, useState, useEffect } from "react";
import { apiURL } from "../constants";

export const ReviewContext = createContext();

const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);
  const [r_isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchReviews = async (id) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${apiURL}/api/review/getReview/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch reviews");
      }

      const data = await response.json();
      setReviews(Array.isArray(data) ? data : data.reviews || []); // Handle various formats
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ReviewContext.Provider
      value={{ reviews, fetchReviews, r_isLoading, error }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewProvider;
