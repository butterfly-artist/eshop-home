// script.js - Custom JS for eShop Home

document.addEventListener('DOMContentLoaded', function () {
  // Carousel auto-play
  const carousel = document.querySelector('#carousel');
  if (carousel) {
    let index = 0;
    const slides = carousel.querySelectorAll('.carousel-slide');
    setInterval(() => {
      slides.forEach((slide, i) => {
        slide.classList.toggle('hidden', i !== index);
      });
      index = (index + 1) % slides.length;
    }, 3500);
  }

  // Scroll to top button
  const scrollBtn = document.getElementById('scrollToTopBtn');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('scroll', () => {
      scrollBtn.style.display = window.scrollY > 200 ? 'flex' : 'none';
    });
  }
});
