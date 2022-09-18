import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./router/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
