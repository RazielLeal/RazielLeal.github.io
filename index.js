// Efecto parallax en el background al hacer scroll
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const background = document.getElementById('background');
  // Se aplica una transformación sutil para generar efecto parallax
  background.style.transform = `translateY(${scrollY * 0.5}px)`;
});

// Suavizado al hacer clic en enlaces de navegación
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Manejo sencillo del formulario de contacto
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Mensaje enviado. ¡Gracias por contactarme!");
    contactForm.reset();
  });
}