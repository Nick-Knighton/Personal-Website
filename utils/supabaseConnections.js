// Import the module for client creation from the Supabase SDK.
import { createClient } from "@supabase/supabase-js"

// Set variables for your Supabase connection. Replace supabaseUrl with the
// API address for your instance, and replace supabaseAnonKey with the anon
// key for your instance.
const supabaseUrl = 'https://mwgzscqvoaayrtscgzwu.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13Z3pzY3F2b2FheXJ0c2Nnend1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyMTA2MjUsImV4cCI6MjAxNDc4NjYyNX0.9OCYsC9wrfImOQP4A_Uowb0nm07Z0P2yPRxtILtzit8'

// Create and export the Supabase client.
export const supabase = createClient(supabaseUrl, supabaseAnonKey)