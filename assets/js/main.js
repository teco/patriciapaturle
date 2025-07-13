document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu toggle with aria-expanded
  function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.querySelector('.menu-toggle');
    const isActive = navLinks.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isActive);
  }
  window.toggleMenu = toggleMenu;

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      document.getElementById('navLinks').classList.remove('active');
      document.querySelector('.menu-toggle').setAttribute('aria-expanded', false);
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.querySelector('.menu-toggle');
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', false);
    }
  });

  // IntersectionObserver for fade-in and slide-up animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
    observer.observe(el);
  });

  // AJAX form submission with feedback
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const statusDiv = document.getElementById('formStatus');
      statusDiv.textContent = 'Enviando...';
      fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          statusDiv.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato.';
          contactForm.reset();
        } else {
          response.json().then(data => {
            statusDiv.textContent = data.errors ? data.errors.map(error => error.message).join(', ') : 'Erro ao enviar. Tente novamente.';
          });
        }
      }).catch(() => {
        statusDiv.textContent = 'Erro ao enviar. Tente novamente.';
      });
    });
  }
});
