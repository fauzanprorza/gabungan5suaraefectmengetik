// Cek apakah tombol gulir ke atas harus ditampilkan
window.onscroll = function() {
    if (document.documentElement.scrollTop > 100) {
      document.getElementById("scroll-top").style.display = "block";
    } else {
      document.getElementById("scroll-top").style.display = "none";
    }
  };
  
  // Animasikan guliran halaman ke atas ketika tombol diklik
  document.getElementById("scroll-top").addEventListener("click", function() {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth" // Gulir halaman dengan animasi lembut
    });
  });
  