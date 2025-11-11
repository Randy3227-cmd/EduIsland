import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// import Ile from "./pages/index";
import Ville1 from "./pages/ville/ville1";
import Ville2 from "./pages/ville/ville2";
import Ville3 from "./pages/ville/ville3";
import Ville4 from "./pages/ville/ville4";
import Ville5 from "./pages/ville/ville5";
import TestSupabase from "./pages/TestSupabase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Ile />} /> */}
      <Route path="/" element={<TestSupabase />} />
      <Route path="/ville1" element={<Ville1 />} />
      <Route path="/ville2" element={<Ville2 />} />
      <Route path="/ville3" element={<Ville3 />} />
      <Route path="/ville4" element={<Ville4 />} />
      <Route path="/ville5" element={<Ville5 />} />
    </Routes>
  </BrowserRouter>
);
