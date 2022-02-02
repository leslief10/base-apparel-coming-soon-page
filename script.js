const form = document.getElementById('form');
const email = document.getElementById('email');
const errorMessage = document.getElementsByClassName('error-message');
const errorIcon = document.getElementsByClassName('error-icon');


form.addEventListener('submit', (e) => {
  if (email.value === '' || email.value === null) {
  }

  e.preventDefault()
})