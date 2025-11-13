import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Ile from "./pages/index";
import Ville from "./pages/ville/Ville";
import Matiere from "./pages/matiere/Matiere";
import Niveau from "./pages/niveau/Niveau";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Ile />} />
      <Route path="/ville/:id" element={<Ville />} />
      <Route path="/matiere/:id" element={<Matiere />} />
      <Route path="/niveau/:id" element={<Niveau />} />
    </Routes>
  </BrowserRouter>
);
