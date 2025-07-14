import React from "react";

import { ListItem, Typography, Box } from "@mui/material";

const StatsPage = () => {
  const stored = JSON.parse(localStorage.getItem("shortUrls")) || [];

  return (
    <Box p={4}>
      <Typography variant="h4">URL Statistics</Typography>
      {stored.map((item, i) => (
        <Box key={i} my={3}>
          <Typography variant="h6">/{item.shortcode}</Typography>
          <Typography>Original URL: {item.originalUrl}</Typography>
          <Typography>Clicks: {item.clicks.length}</Typography>
          <Typography>Created: {item.createdAt}</Typography>
          <Typography>Expiry: {item.validity} minutes</Typography>
          <Typography mt={1}>Click Details:</Typography>
          {item.clicks.map((click, j) => (
            <ListItem key={j}>
              - {click.time}, From: {click.referrer}, Location: {click.location}
            </ListItem>
          ))}
        </Box>
      ))}
    </Box>

  );
};

export default StatsPage;
