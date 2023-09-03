import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qtjtmyrmibnxysdtleed.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0anRteXJtaWJueHlzZHRsZWVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM2NzM0MzgsImV4cCI6MjAwOTI0OTQzOH0.CShyurRviZj4JGv2DIdMN4-nwQRiFX4iGfc_Y8sfOm0";

export const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
