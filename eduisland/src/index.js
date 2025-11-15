import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Ile from "./pages/index";
import Ville from "./pages/ville/Ville";
import Matiere from "./pages/matiere/Matiere";
import Niveau from "./pages/niveau/Niveau";
import Login from "./pages/login";

import { UserProvider, useUser } from "./context/UserContext"; // ton UserContext

// Wrapper pour injecter userId dans Niveau
function NiveauWrapper() {
  const { user } = useUser();
  return <Niveau userId={user?.id} />;
}

// Wrapper pour injecter userId dans Matiere
function MatiereWrapper() {
  const { user } = useUser();
  return <Matiere userId={user?.id} />;
}

// Wrapper pour injecter userId dans Ville (optionnel)
function VilleWrapper() {
  const { user } = useUser();
  return <Ville userId={user?.id} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/island" element={<Ile />} />
        <Route path="/ville/:id" element={<VilleWrapper />} />
        <Route path="/matiere/:id" element={<MatiereWrapper />} />
        <Route path="/niveau/:id" element={<NiveauWrapper />} />
      </Routes>
    </UserProvider>
  </BrowserRouter>
);
