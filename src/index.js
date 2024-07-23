import React from "react";
import App from "./App";
import "normalize.css";
import { createRoot } from "react-dom/client";
import { GlobalStyles } from "./global-styles.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);
