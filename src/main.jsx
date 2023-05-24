import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MealsProvider from "./providers/MealsProvider.jsx";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* USE CONTEXT */}
        {/* <MealsProvider>
              <App />
            </MealsProvider> */}

        {/* REACT ROUTER */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
