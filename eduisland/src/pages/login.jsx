// src/pages/login/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../services/supabaseClient";
import { useUser } from "../context/UserContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUser(); // ✅ récupérer setUser du contexte

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .eq("password", password)
        .single();

      if (error || !data) {
        setError("Email ou mot de passe incorrect");
        return;
      }

      setUser(data); // ✅ stocke l'utilisateur dans le contexte
      navigate("/island"); // plus besoin de passer userId dans location.state
    } catch (err) {
      console.error("Erreur login:", err);
      setError("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md flex flex-col gap-4 w-80"
      >
        <h2 className="text-2xl font-bold text-center">Connexion</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded"
          required
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
}
