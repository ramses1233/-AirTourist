/* =========================
   MAIN JAVASCRIPT FILE
   AirTourist Landing Page
========================= */

/* Smooth scroll for internal navigation */
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

/* Basic form validation */
const loginForm = document.querySelector('form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const password = document.getElementById('password').value.trim();

  if (name === '' || password === '') {
    alert('Por favor, complete todos los campos.');
    return;
  }

  alert(`Bienvenido a AirTourist, ${name}`);
  loginForm.reset();
});
