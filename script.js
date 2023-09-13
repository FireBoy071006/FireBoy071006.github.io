window.addEventListener('load', function () {
    var homeSection = document.getElementById('home-section');
    homeSection.scrollIntoView({ behavior: 'smooth' });
});

// JavaScript untuk menampilkan konten saat tautan navigasi diklik
document.querySelector('nav').addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        var targetId = e.target.getAttribute('href').substring(1);
        var sections = document.querySelectorAll('section');
        sections.forEach(function (section) {
            section.style.display = 'none';
        });
        document.getElementById(targetId + '-section').style.display = 'block';
    }
});
// JavaScript untuk mengalihkan ke bagian "Beranda" saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    var homeSection = document.getElementById('home-section');
    homeSection.style.display = 'block';
    homeSection.scrollIntoView({ behavior: 'smooth' });
});
document.addEventListener('DOMContentLoaded', function() {
    var homeLink = document.querySelector('nav a[href="#home"]');
    homeLink.click();
});
    