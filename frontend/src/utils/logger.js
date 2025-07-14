export function logEvent(message) {
  const logs = JSON.parse(localStorage.getItem("logs")) || [];
  logs.push({ message, time: new Date().toISOString() });
  localStorage.setItem("logs", JSON.stringify(logs));
}
