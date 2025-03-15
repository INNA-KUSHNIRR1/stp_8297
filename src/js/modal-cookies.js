document.addEventListener('DOMContentLoaded', () => {
  const cookieBox = document.querySelector('.modal-cookies-wrapper');
  const acceptBtn = document.querySelector('#acceptBtn');
  const declineBtn = document.querySelector('.button.decline');

  // Checking if cookies are accepted
  const cookiesAccepted = localStorage.getItem('cookiesAccepted') === 'true';

  if (!localStorage.getItem('cookiesAccepted')) {
    cookieBox.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Blocking scrolling
  }

  // Function to close the modal window
  const closeModal = () => {
    cookieBox.style.display = 'none';
    document.body.style.overflow = ''; // Allowing scrolling
  };

  // Event handlers
  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    closeModal();
  });

  declineBtn.addEventListener('click', () => {
    closeModal();
  });
});
