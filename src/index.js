import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CategoryProvider } from "./Contexts/CategoryContext";
import { CoinBlogProvider } from "./Contexts/SmartContractContext/coinBlogContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CoinBlogProvider>
      <CategoryProvider>
        <App />
      </CategoryProvider>
    </CoinBlogProvider>
  </React.StrictMode>
);
reportWebVitals();
