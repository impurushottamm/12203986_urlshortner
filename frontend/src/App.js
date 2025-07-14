import React from "react";
import { useRoutes } from "react-router-dom";
import ShortenerForm from "./components/ShortenerForm";
import RedirectHandler from "./components/RedirectHandler";
import StatsPage from "./components/StatsPage";

// Define and render routes using useRoutes hook
const App = () => {
  const routingConfig = useRoutes([
    { path: "/", element: <ShortenerForm /> },
    { path: "/:shortcode", element: <RedirectHandler /> },
    { path: "/stats", element: <StatsPage /> },
  ]);

  return routingConfig;
};

export default App;
