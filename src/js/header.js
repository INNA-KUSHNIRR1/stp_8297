document.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.querySelector('.btn-burger');
  const menuBackdrop = document.querySelector('.burger-backdrop');
  const menu = document.querySelector('.burger-menu');
  const closeButton = document.querySelector('.menu-close-btn');

  // Open menu
  burgerBtn.addEventListener('click', function () {
    menuBackdrop.classList.add('open');
  });

  // Close menu
  closeButton.addEventListener('click', function () {
    menuBackdrop.classList.remove('open');
  });

  // Close by clicking outside menu
  menuBackdrop.addEventListener('click', function (event) {
    if (!menu.contains(event.target) && !burgerBtn.contains(event.target)) {
      menuBackdrop.classList.remove('open');
    }
  });
});
