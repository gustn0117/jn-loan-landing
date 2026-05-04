import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const schema = process.env.SUPABASE_SCHEMA || "jn_loan_landing";

export const sbAdmin = () =>
  createClient(url, serviceKey, {
    db: { schema },
    auth: { persistSession: false, autoRefreshToken: false },
  });

export const SCHEMA = schema;
