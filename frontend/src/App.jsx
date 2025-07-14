import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import ShortenerForm from "./components/ShortenerForm";
import StatsPage from "./components/StatsPage";
import { useEffect } from "react";
import { Log } from "./utils/logger";

useEffect(() => {
  Log("App mounted", "INFO", "App", "React app loaded successfully.");
}, []);


function App() {
  return (
    <Routes>
      <Route path="/" element={<ShortenerForm />} />
      <Route path="/stats" element={<StatsPage />} />
      <Route path="/:shortcode" element={<RedirectHandler />} />
    </Routes>
  );
}

function RedirectHandler() {
  const { shortcode } = useParams();
  const data = JSON.parse(localStorage.getItem("shortUrls")) || [];
  const record = data.find(item => item.shortcode === shortcode);

  if (record) {
    const now = new Date();
    const expiry = new Date(record.createdAt);
    expiry.setMinutes(expiry.getMinutes() + record.validity);

    if (now < expiry) {
      const clickLog = {
        time: new Date().toISOString(),
        referrer: document.referrer || "direct",
        location: "India"
      };
      record.clicks.push(clickLog);
      localStorage.setItem("shortUrls", JSON.stringify(data));
      window.location.href = record.originalUrl;
    } else {
      return <div>URL has expired.</div>;
    }
  } else {
    return <div>URL not found.</div>;
  }
}

export default App;
