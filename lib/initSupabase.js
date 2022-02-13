import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://mfxkvontivrpqtcvzubg.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1meGt2b250aXZycHF0Y3Z6dWJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ3MjU5MTEsImV4cCI6MTk2MDMwMTkxMX0.at50yOQ1Zyl6nvj0XaaYQH6TX0QthcykUfxuFnjYjxE"
)
