// ==========================================
// SIAJA PRO - Konfigurasi Supabase
// ==========================================

// ⚠️ GANTI DENGAN PUNYA ANDA
const SUPABASE_URL = 'https://iadrrnkztxdwqubrnbqp.supabase.co/rest/v1/';
const SUPABASE_ANON_KEY = 'sb_publishable_jCNMmqYsja98OOI6HyYfrg_xVz20hH3';

// Inisialisasi Supabase Client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
