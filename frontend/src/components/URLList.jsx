import React from "react";
import { List, ListItem, Typography } from "@mui/material";

const URLList = ({ data }) => {
  return (
    <>
      <Typography variant="h6" mt={4}>Shortened URLs</Typography>
      <List>
        {data.map((item, idx) => (
          <ListItem key={idx}>
            <Typography>
              {item.shortcode} → {item.originalUrl} | Expires in: {item.validity} min
            </Typography>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default URLList;
