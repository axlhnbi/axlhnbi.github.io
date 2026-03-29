// Menunggu dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('themeToggle');
    const body = document.body;

    // Fungsi untuk mengganti mode warna sederhana
    themeBtn.addEventListener('click', () => {
        if (body.style.background.includes('linear-gradient')) {
            body.style.background = '#2d3436';
            themeBtn.innerText = 'Mode Gradient';
        } else {
            body.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)';
            themeBtn.innerText = 'Mode Gelap Polos';
        }
    });

    // Animasi sederhana saat gambar profil diklik
    const profilePic = document.getElementById('profilePic');
    profilePic.addEventListener('click', () => {
        profilePic.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            profilePic.style.transform = 'rotate(0deg)';
        }, 500);
    });
});