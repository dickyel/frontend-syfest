document.addEventListener('DOMContentLoaded', function () {
    // Tampilkan spinner dengan latar belakang biru
    document.getElementById('loading-spinner').style.display = 'flex';

    // Simulasi loading selama 3 detik
    setTimeout(function () {
        // Hilangkan loading spinner
        document.getElementById('loading-spinner').style.display = 'none';

        // Tampilkan konten utama
        document.getElementById('main-content').classList.remove('hidden');
    }, 1000);
});