// ==========================================
// SIAJA PRO - Shared Functions
// ==========================================

// Konfigurasi Supabase (GANTI DENGAN PUNYA ANDA)
const SUPABASE_URL = 'https://iadrrnkztxdwqubrnbqp.supabase.co/rest/v1/';
const SUPABASE_ANON_KEY = 'sb_publishable_jCNMmqYsja98OOI6HyYfrg_xVz20hH3';

// Inisialisasi Supabase Client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Fungsi utility
function formatTanggal(date) {
    return new Date(date).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Generate kode akses unik
function generateKodeAkses(kelas) {
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `UJIAN-${kelas}-${random}`;
}

// Koreksi otomatis
function koreksiJawaban(tipe, jawabanSiswa, kunci) {
    if (tipe === 'pilihan_ganda' || tipe === 'benar_salah') {
        return jawabanSiswa === kunci;
    } else if (tipe === 'pg_kompleks') {
        // Untuk pilihan ganda kompleks (multiple answer)
        const jawabanArr = jawabanSiswa.split(',').sort();
        const kunciArr = kunci.split(',').sort();
        return JSON.stringify(jawabanArr) === JSON.stringify(kunciArr);
    } else if (tipe === 'menjodohkan') {
        // Untuk soal menjodohkan
        const jawabanObj = JSON.parse(jawabanSiswa || '{}');
        const kunciObj = JSON.parse(kunci || '{}');
        let benar = 0;
        for (let key in kunciObj) {
            if (jawabanObj[key] === kunciObj[key]) benar++;
        }
        return benar / Object.keys(kunciObj).length;
    }
    return false;
}

console.log('✅ SiAJa Pro - Script loaded successfully');