"use client";

import React, { createContext, useState, useEffect } from "react";
import { apiURL } from "../constants";
import { useUser } from "@clerk/nextjs";

export const SubscriberContext = createContext();

const SubscriberProvider = ({ children }) => {
  const [subscribed, setSubscribed] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUser(); // Get the current user from Clerk

  const checkSubscription = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${apiURL}/api/subscriber/getSubscribers`);
      const result = await res.json();

      if (result.success) {
        // Get the primary email address of the user
        const primaryEmail = user?.emailAddresses.find(
          (email) => email.id === user?.primaryEmailAddressId
        )?.emailAddress;

        // Check if the primary email exists in the subscribers list
        const isUserSubscribed = result.data.some(
          (subscriber) => subscriber.email === primaryEmail
        );
        setSubscribed(isUserSubscribed);
      } else {
        setSubscribed(false);
      }
    } catch (error) {
      console.error("Error checking subscription:", error);
      setSubscribed(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Call checkSubscription when the user changes
  useEffect(() => {
    if (user) {
      checkSubscription();
    }
  }, [user]); // Dependency on `user`

  return (
    <SubscriberContext.Provider
      value={{ subscribed, isLoading, checkSubscription }}
    >
      {children}
    </SubscriberContext.Provider>
  );
};

export default SubscriberProvider;
