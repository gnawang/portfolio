import { createBrowserClient } from "@supabase/ssr";

/**
 * Creates a Supabase client for browser/client-side usage.
 * Uses the publishable key which is safe for client exposure.
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );
}
