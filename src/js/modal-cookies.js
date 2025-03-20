document.addEventListener('DOMContentLoaded', () => {
  const modalCookies = document.querySelector('.modal-cookies');
  const acceptBtn = document.querySelector('#acceptBtn');
  const declineBtn = document.querySelector('.button.decline');

  // Checking if a value is set in localStorage
  const cookiesAccepted = localStorage.getItem('cookiesAccepted');

  if (cookiesAccepted === 'true' || cookiesAccepted === 'false') {
    modalCookies.style.display = 'none';
  } else {
    modalCookies.style.display = 'flex';
    setTimeout(() => {
      modalCookies.classList.add('show');
    }, 1000); // Adding a class to show the modal
    document.body.style.overflow = 'hidden'; // Blocking scrolling
  }

  // Function to close the modal window
  const closeModal = () => {
    modalCookies.classList.remove('show');
    document.body.style.overflow = ''; // Unblocking scrolling
    setTimeout(() => {
      modalCookies.style.display = 'none';
    }, 500);
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
