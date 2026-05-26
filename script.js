// ==========================================
// SIAJA PRO - Konfigurasi Supabase
// ==========================================

// ⚠️ GANTI DENGAN PUNYA ANDA
const SUPABASE_URL = 'https://iadrrnkztxdwqubrnbqp.supabase.co/rest/v1/';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhZHJybmt6dHhkd3F1YnJuYnFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3ODAwNzYsImV4cCI6MjA5NTM1NjA3Nn0.Zrku8OpcbUnJ0kaG0ibWQ-oCK5pKia290e15ZNSZDi4';

// Inisialisasi Supabase Client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
