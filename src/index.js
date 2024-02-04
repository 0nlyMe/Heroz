import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CategoryProvider } from "./Contexts/CategoryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CategoryProvider>
      <App />
    </CategoryProvider>
  </React.StrictMode>
);
reportWebVitals();
