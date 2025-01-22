import React from "react";
import ReactDOM from "react-dom/client"; // Updated import
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App"; // or wherever your root component is

// Get the root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render your app using createRoot
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
