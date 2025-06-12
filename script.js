// Smooth scroll
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Dark Mode Toggle
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


// AOS Initialization
AOS.init({
  duration: 800,
  once: true,
});
