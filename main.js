const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__content form", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".header__content .bar", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".header__image__card", {
  duration: 1000,
  interval: 500,
  delay: 2500,
});

// main.js

// Mostrar el modal de inicio de sesión
document.getElementById("openLoginBtn").addEventListener("click", function () {
    document.getElementById("loginModal").style.display = "block";
  });
  
  // Mostrar el modal de registro
  document.getElementById("openRegisterBtn").addEventListener("click", function () {
    document.getElementById("registerModal").style.display = "block";
  });
  
  // Cerrar el modal de inicio de sesión
  document.getElementById("closeLogin").addEventListener("click", function () {
    document.getElementById("loginModal").style.display = "none";
  });
  
  // Cerrar el modal de registro
  document.getElementById("closeRegister").addEventListener("click", function () {
    document.getElementById("registerModal").style.display = "none";
  });
  
  // Cerrar modales al hacer clic fuera de ellos
  window.addEventListener("click", function (event) {
    if (event.target === document.getElementById("loginModal")) {
      document.getElementById("loginModal").style.display = "none";
    }
    if (event.target === document.getElementById("registerModal")) {
      document.getElementById("registerModal").style.display = "none";
    }
  });
  
  // Manejo de envío de formularios (placeholder, deberás implementar la lógica del lado del servidor)
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    // Aquí podrías implementar la lógica para autenticar al usuario
    alert("Iniciando sesión...");
  });
  
  document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    // Aquí podrías implementar la lógica para registrar al nuevo usuario
    alert("Registrando usuario...");
  });
  