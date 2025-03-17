document.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.querySelector('.btn-burger');
  // const menuBackdrop = document.querySelector('.burger-backdrop');
  const menu = document.querySelector('.burger-menu');
  const closeButton = document.querySelector('.menu-close-btn');
  const items = document.querySelectorAll('.menu-item');

  // Open menu
  burgerBtn.addEventListener('click', function () {
    // menuBackdrop.classList.add('is-open');
    menu.classList.add('is-open');
  });

  // Close menu
  closeButton.addEventListener('click', function () {
    // menuBackdrop.classList.remove('is-open');
    menu.classList.remove('is-open'); //Removing the class from the menu
  });

  items.forEach(item => {
    item.addEventListener('click', closeMenu);
  });

  function closeMenu() {
    // menuBackdrop.classList.remove('is-open');
    menu.classList.remove('is-open');
  }

  menu.addEventListener('click', function () {
    menu.classList.remove('is-open');
  });

  // Close by clicking outside menu
  // menuBackdrop.addEventListener('click', function (event) {
  //   if (!menu.contains(event.target) && !burgerBtn.contains(event.target)) {
  //     menuBackdrop.classList.remove('is-open');
  //   }
  // });
});
