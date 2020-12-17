'use strict';

function toggleMenu() {
  const toggleBtn = document.querySelector('.toggle');
  const banner = document.querySelector('.banner');
  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    banner.classList.toggle('active');
  });
}
toggleMenu();
