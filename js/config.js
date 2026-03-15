const SUPABASE_URL="https://SEU-PROJETO.supabase.co"
const SUPABASE_KEY="SUA_PUBLIC_KEY"

window.supabaseClient =
supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
)