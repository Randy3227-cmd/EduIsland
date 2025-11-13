import { createClient } from '@supabase/supabase-js';

export default async function updateXP(req) {
  const { user_id, xp_gained } = await req.json();
  
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY
  );

  const { data, error } = await supabase
    .from('users')
    .update({ xp_total: supabase.raw(`xp_total + ${xp_gained}`) })
    .eq('id', user_id)
    .select();

  return new Response(JSON.stringify({ data, error }), {
    headers: { 'Content-Type': 'application/json' },
  });
}