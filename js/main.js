// Toggle menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  menuToggle.classList.toggle("active");
});

// Sticky header after scroll
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Active link highlight on scroll
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Contact form (demo only)
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent! (Demo only)");
});

document.getElementById("year").textContent = new Date().getFullYear();
