// loggingMiddleware/log.jsx
const LOG_ENDPOINT = "http://20.244.56.144/evaluation-service/logs";
const AUTH_TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJwdXJ1c2hvdHRhbS5rdW1hckBscHUuaW4iLCJleHAiOjE3NTI0NzMzMDUsImlhdCI6MTc1MjQ3MjQwNSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImVjMjU0YzZlLWVlYTgtNGZhYi1hYTkzLWViNTYzNmE3MWFkNyIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InB1cnVzaG90dGFtIGt1bWFyIiwic3ViIjoiOTQyOTNhNzEtNDQ4NS00MjMxLWIxNWMtYmY5YTAyZGY4OGI5In0sImVtYWlsIjoicHVydXNob3R0YW0ua3VtYXJAbHB1LmluIiwibmFtZSI6InB1cnVzaG90dGFtIGt1bWFyIiwicm9sbE5vIjoiMTIyMDM5ODYiLCJhY2Nlc3NDb2RlIjoiQ1p5cFFLIiwiY2xpZW50SUQiOiI5NDI5M2E3MS00NDg1LTQyMzEtYjE1Yy1iZjlhMDJkZjg4YjkiLCJjbGllbnRTZWNyZXQiOiJtSmp4ZVB4WnVhWGV4TXpGIn0.j_brWm5t8oM38ja2hl4mpJHl7QFAXlLLaZS6BrUHOl4";

async function Log(stack, level, pkg, message) {
  try {
    const payload = {
      stack,
      level,
      package: pkg,
      message,
    };

    const response = await fetch(LOG_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTH_TOKEN,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error("Failed to log:", await response.text());
    }
  } catch (error) {
    console.error("Logging error:", error);
  }
}



export { Log };