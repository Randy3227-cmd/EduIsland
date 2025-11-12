import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Ile from "./pages/index";
import Ville from "./pages/ville/Ville";
import Matiere from "./pages/matiere/Matiere";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Ile />} />
      <Route path="/ville/:id" element={<Ville />} />
      <Route path="/matiere/:id" element={<Matiere />} />
    </Routes>
  </BrowserRouter>
);
