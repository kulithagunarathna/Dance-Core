import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yolyihamwyavzqksahjf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvbHlpaGFtd3lhdnpxa3NhaGpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzMDQwNzMsImV4cCI6MjA4Mzg4MDA3M30.BM3y9ddZJcHa45iuVxiU0awwKqVyrt3PmbzBM5aVoRo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);