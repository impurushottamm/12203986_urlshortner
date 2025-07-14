import React from "react";

const StatsPage = () => {
  const stored = JSON.parse(localStorage.getItem("shortUrls")) || [];

  return (
    <div style={{ padding: "20px" }}>
      <h2>URL Statistics</h2>

      {stored.length === 0 ? (
        <p>No shortened URLs found.</p>
      ) : (
        stored.map((item, i) => {
          const shortUrl = `${window.location.origin}/${item.shortcode}`;
          return (
            <div key={i} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
              <h4>{i + 1}. /{item.shortcode}</h4>
              <p>
                <strong>Original URL:</strong>{" "}
                <a href={item.originalUrl} target="_blank" rel="noopener noreferrer">
                  {item.originalUrl}
                </a>
              </p>
              <p>
                <strong>Shortened URL:</strong>{" "}
                <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                  {shortUrl}
                </a>
              </p>
              <p>
                <strong>Validity:</strong> {item.validity} minutes
              </p>
              <p>
                <strong>Total Clicks:</strong> {item.clicks.length}
              </p>

              {item.clicks.length > 0 && (
                <>
                  <p><strong>Click Details:</strong></p>
                  <ul>
                    {item.clicks.map((click, j) => (
                      <li key={j}>
                        {new Date(click.time).toLocaleString()} — Referrer: {click.referrer}, Location: {click.location}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default StatsPage;
