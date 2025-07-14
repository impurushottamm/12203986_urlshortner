
import React, { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import URLList from "./URLList";
import { logEvent } from "../utils/logger";

const ShortenerForm = () => {
  const [urls, setUrls] = useState([{ long: "", validity: 30, shortcode: "" }]);
  const [shortenedUrls, setShortenedUrls] = useState([]);

  const handleChange = (i, field, value) => {
    const updated = [...urls];
    updated[i][field] = value;
    setUrls(updated);
  };

  const handleShorten = () => {
    const stored = JSON.parse(localStorage.getItem("shortUrls")) || [];
    const newData = urls.map((url) => {
      const code = url.shortcode || uuidv4().slice(0, 6);
      return {
        originalUrl: url.long,
        validity: parseInt(url.validity) || 30,
        shortcode: code,
        createdAt: new Date().toISOString(),
        clicks: []
      };
    });

    localStorage.setItem("shortUrls", JSON.stringify([...stored, ...newData]));
    setShortenedUrls([...stored, ...newData]);
    logEvent("Shortened URLs generated.");
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>React URL Shortener</Typography>
      {urls.map((url, i) => (
        <Box key={i} mb={2}>
          <TextField
            fullWidth
            label="Original URL"
            value={url.long}
            onChange={(e) => handleChange(i, "long", e.target.value)}
            sx={{ mb: 1 }}
          />
          <TextField
            label="Validity (min)"
            type="number"
            value={url.validity}
            onChange={(e) => handleChange(i, "validity", e.target.value)}
            sx={{ mr: 1 }}
          />
          <TextField
            label="Preferred Shortcode"
            value={url.shortcode}
            onChange={(e) => handleChange(i, "shortcode", e.target.value)}
          />
        </Box>
      ))}
      <Button
        variant="contained"
        onClick={handleShorten}
        disabled={urls.length === 0}
      >
        Shorten URLs
      </Button>
      <URLList data={shortenedUrls} />
    </Box>
  );
};

export default ShortenerForm;

