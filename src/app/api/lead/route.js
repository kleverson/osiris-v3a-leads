import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

const removeMask = (value) => value.replace(/\D/g, "");

export async function POST(request) {
  const body = await request.json();

  const { email, phone, document, name } = body;

  const cleanPhone = removeMask(phone);
  const cleanDocument = removeMask(document);

  const { data, error } = await supabase
    .from("subscribes")
    .insert([{ email, phone: cleanPhone, document: cleanDocument, name }]);

  if (error) {
    return new Response(JSON.stringify({ msg: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ success: true, data }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
