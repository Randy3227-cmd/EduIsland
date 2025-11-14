import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Ile from "./pages/index";
import Ville from "./pages/ville/Ville";
import Matiere from "./pages/matiere/Matiere";
import Niveau from "./pages/niveau/Niveau";

// ID utilisateur temporaire - à remplacer par l'authentification réelle
const TEMP_USER_ID = "a1e6874a-bebe-46d6-949c-c0ce5df3b9ae";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Ile />} />
      <Route path="/ville/:id" element={<Ville userId={TEMP_USER_ID} />} />
      <Route path="/matiere/:id" element={<Matiere userId={TEMP_USER_ID} />} />
      <Route path="/niveau/:id" element={<Niveau userId={TEMP_USER_ID} />} />
    </Routes>
  </BrowserRouter>
);
