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

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Show popup
  const popup = document.createElement("div");
  popup.innerText = "✅ Message Sent Successfully!";
  popup.style.position = "fixed";
  popup.style.top = "20px";
  popup.style.right = "20px";
  popup.style.padding = "15px 30px";
  popup.style.background = "#0068c8";
  popup.style.color = "#fff";
  popup.style.fontSize = "16px";
  popup.style.borderRadius = "10px";
  popup.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
  popup.style.zIndex = "9999";
  popup.style.opacity = "0";
  popup.style.transition = "opacity 0.4s ease, transform 0.4s ease";
  popup.style.transform = "translateY(-20px)";

  document.body.appendChild(popup);

  // Animate in
  setTimeout(() => {
    popup.style.opacity = "1";
    popup.style.transform = "translateY(0)";
  }, 50);

  // Animate out and remove
  setTimeout(() => {
    popup.style.opacity = "0";
    popup.style.transform = "translateY(-20px)";
    setTimeout(() => popup.remove(), 400);
  }, 2500);

  document.getElementById("contactForm").reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
