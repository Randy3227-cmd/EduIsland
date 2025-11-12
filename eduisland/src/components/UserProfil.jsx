// src/components/UserProfile.jsx
import React, { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";

export default function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (!userId) return;
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", userId)
        .single();

      if (error) console.error("Erreur fetch user:", error);
      else setUser(data);
    };

    fetchUser();
  }, [userId]);

  if (!user) return null;

  return (
    <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4 bg-pink-100/80 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-xl border-2 border-pink-300 animate-bounce">
      <img
        src={user.image || "/default-avatar.png"}
        alt={user.name}
        className="w-14 h-14 rounded-full border-4 border-yellow-300 shadow-lg object-cover"
      />

      <div className="flex flex-col">
        <span className="font-bold text-xl text-purple-700 drop-shadow-md">{user.name}</span>
        <span className="text-base text-orange-500 font-semibold">XP : {user.xp_total}</span>
      </div>
    </div>
  );
}
