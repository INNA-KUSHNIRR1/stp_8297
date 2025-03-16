document.addEventListener('DOMContentLoaded', () => {
  const cookieBox = document.querySelector('.modal-cookies-wrapper');
  const acceptBtn = document.querySelector('#acceptBtn');
  const declineBtn = document.querySelector('.button.decline');

  // Checking if a value is set in localStorage
  const cookiesAccepted = localStorage.getItem('cookiesAccepted');

  if (cookiesAccepted !== 'true' && cookiesAccepted !== 'false') {
    cookieBox.classList.add('show'); // Adding a class to show the modal
    document.body.style.overflow = 'hidden'; // Blocking scrolling
  }

  // Function to close the modal window
  const closeModal = () => {
    cookieBox.classList.remove('show');
    document.body.style.overflow = ''; // Unblocking scrolling
  };

  // Handler for the "Accept Cookies" button click
  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    closeModal();
  });

  // Handler for the "Decline Cookies" button click
  declineBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'false');
    closeModal();
  });
});
