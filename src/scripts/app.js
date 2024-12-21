document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open'); // Toggles the class to open/close the menu
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelector('.slides');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;

  const updateSlider = (index) => {
    slides.style.transform = `translateX(-${index * 100}%)`; // Move slides
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index); // Highlight active dot
    });
  };

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateSlider(currentIndex);
    });
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % dots.length;
    updateSlider(currentIndex);
  }, 5000);
});
