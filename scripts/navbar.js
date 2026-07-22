const body = document.body;
const navbar = document.querySelector("#nav-menu");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const navLinks = document.querySelectorAll(".menu-list .nav-link");
const themeToggle = document.querySelector(".theme-toggle");

const savedTheme = localStorage.getItem("portfolio-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function applyTheme(theme) {
  const isDark = theme === "dark";
  body.classList.toggle("dark-mode", isDark);
  if (!themeToggle) return;
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  themeToggle.innerHTML = `<i class="fas fa-${isDark ? "sun" : "moon"}"></i>`;
}

applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

function updateNavState() {
  if (!navbar) return;
  navbar.classList.toggle("active_nav", window.scrollY >= 20);
}

function closeMenu() {
  if (!navbar || !menuBtn) return;
  navbar.classList.remove("show");
  body.classList.remove("disabled");
  menuBtn.setAttribute("aria-expanded", "false");
}

function openMenu() {
  if (!navbar || !menuBtn) return;
  navbar.classList.add("show");
  body.classList.add("disabled");
  menuBtn.setAttribute("aria-expanded", "true");
}

updateNavState();
window.addEventListener("scroll", updateNavState);
menuBtn?.addEventListener("click", openMenu);
cancelBtn?.addEventListener("click", closeMenu);
navLinks.forEach((link) => link.addEventListener("click", closeMenu));
themeToggle?.addEventListener("click", () => {
  const nextTheme = body.classList.contains("dark-mode") ? "light" : "dark";
  localStorage.setItem("portfolio-theme", nextTheme);
  applyTheme(nextTheme);
});

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 6, 5) * 70}ms`;
    revealObserver.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}
