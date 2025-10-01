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

(function () {
  emailjs.init("aSrRjPdVwn8E534s3");
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .send("service_7xsa06h", "template_k5nxzqq", {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    })
    .then(
      function () {
        showPopup("✅ Message Sent Successfully!");
        document.getElementById("contactForm").reset();
      },
      function (error) {
        showPopup("❌ Failed to send. Try again.");
      }
    );
});

// Simple popup
function showPopup(msg) {
  let popup = document.createElement("div");
  popup.innerText = msg;
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.padding = "20px 40px";
  popup.style.background = "#0068c8";
  popup.style.color = "#fff";
  popup.style.fontSize = "18px";
  popup.style.borderRadius = "10px";
  popup.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
  popup.style.zIndex = "9999";
  popup.style.transition = "opacity 0.5s ease";
  document.body.appendChild(popup);

  setTimeout(() => {
    popup.style.opacity = "0";
    setTimeout(() => popup.remove(), 500);
  }, 2500);
}

document.getElementById("year").textContent = new Date().getFullYear();
