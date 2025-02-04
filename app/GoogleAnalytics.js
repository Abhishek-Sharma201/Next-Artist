"use client";

import { useEffect } from "react";

const GoogleAnalytics = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-GY6G3JN45Y");
    }
  }, []);

  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-GY6G3JN45Y"
      ></script>
    </>
  );
};

export default GoogleAnalytics;
