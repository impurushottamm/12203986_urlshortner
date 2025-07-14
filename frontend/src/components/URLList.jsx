import React from "react";
import {
  List,
  ListItem,
  Typography,
  Link as MuiLink,
  Box
} from "@mui/material";

const URLList = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <>
      <Typography variant="h6" mt={4}>Shortened URLs</Typography>
      <List>
        {data.map((item, idx) => {
          const shortUrl = `${window.location.origin}/${item.shortcode}`;
          return (
            <ListItem key={idx} divider>
              <Box>
                <Typography variant="body2">
                  <strong>Original:</strong>{" "}
                  <MuiLink
                    href={item.originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.originalUrl}
                  </MuiLink>
                </Typography>

                <Typography variant="body2" mt={1}>
                  <strong>Shortened:</strong>{" "}
                  <MuiLink
                    href={shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {shortUrl}
                  </MuiLink>
                </Typography>

                <Typography variant="caption" color="textSecondary">
                  Expires in: {item.validity} min
                </Typography>
              </Box>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default URLList;
