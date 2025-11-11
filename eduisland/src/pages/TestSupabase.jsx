import React, { useEffect, useState } from 'react'
import { supabase } from '../services/supabaseClient'

function TestSupabase() {
  const [villes, setVilles] = useState([])

  useEffect(() => {
    const fetchVilles = async () => {
      const { data, error } = await supabase.from('villes').select('*')
      if (error) console.error(error)
      else setVilles(data)
    }
    fetchVilles()
  }, [])

  return (
    <div>
      <h1>Liste des villes</h1>
      <ul>
        {villes.map(v => (
          <li key={v.id}>{v.name} — {v.xp_required}</li>
        ))}
      </ul>
    </div>
  )
}
export default TestSupabase;
