"use client";

import React, { createContext, useState, useEffect } from "react";

export const ReviewContext = createContext();

const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);
  const [r_isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch reviews based on the album/drawing id
  const fetchReviews = async (id) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/review/getReview/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch reviews");
      }
      const data = await response.json();
      setReviews(data); // Set the reviews from the API
    } catch (error) {
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
