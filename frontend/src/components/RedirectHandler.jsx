import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const RedirectHandler = () => {
  const { shortcode } = useParams();

  useEffect(() => {
    const mappings = JSON.parse(localStorage.getItem("shortenedUrls") || "{}");
    const data = mappings[shortcode];

    if (!data) {
      alert("Shortcode not found");
      return;
    }

    // Check expiry
    const currentTime = new Date().getTime();
    if (currentTime > data.expiry) {
      alert("This link has expired.");
      return;
    }

    // Redirect
    window.location.href = data.originalUrl;
  }, [shortcode]);

  return <p>Redirecting...</p>;
};

export default RedirectHandler;
