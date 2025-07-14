const LOG_ENDPOINT = "http://20.244.56.144/evaluation-service/logs";
const AUTH_TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhbnlhYXNldGhAZ21haWwuY29tIiwiZXhwIjoxNzUxMDEzODA5LCJpYXQiOjE3NTEwMTI5MDksImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI1YzRkYmNmYy05ZmRjLTQ4ZTctOGJhZC1iZjhiNDg1MzhkNGYiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJhbnlhIHNldGgiLCJzdWIiOiI1MWNhMTZlYi00YWY4LTQ0MWItODc0YS1hMzJlZTYwYmFhMWQifSwiZW1haWwiOiJhbnlhYXNldGhAZ21haWwuY29tIiwibmFtZSI6ImFueWEgc2V0aCIsInJvbGxObyI6IjIyMTMxMDExMjcxIiwiYWNjZXNzQ29kZSI6Ik11YWd2cSIsImNsaWVudElEIjoiNTFjYTE2ZWItNGFmOC00NDFiLTg3NGEtYTMyZWU2MGJhYTFkIiwiY2xpZW50U2VjcmV0IjoiR2toeGZZWUNCSlhOamtTZyJ9._MO16E4uDepXu26ESy_26D2Bb224VbAv2G1KjLkjSWU";

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