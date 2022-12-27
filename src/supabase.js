import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xullqnagrcpvimidzcva.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1bGxxbmFncmNwdmltaWR6Y3ZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE2NjI0MjUsImV4cCI6MTk4NzIzODQyNX0.421MdkI_A-l9kKrdznp8xyGF9IWiI0Xo4wg4rNL_W2o";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
