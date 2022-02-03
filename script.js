const form = document.querySelector('#form');
const email = document.querySelector('#email');
const errorMessage = document.querySelector('#error-message');
const successMessage = document.querySelector('#success-message');
const errorIcon = document.querySelector('#error-icon');

//errorMessage.style.visibility = 'hidden';
//successMessage.style.visibility = 'hidden';
//errorIcon.style.visibility = 'hidden';

form.addEventListener('submit', (e) => {
    e.preventDefault();

  validateInputs();
})

const errorFunction = () => {
  errorMessage.style.visibility = 'visible';
  errorIcon.style.visibility = 'visible';
  email.style.border = '1px solid var(--secondary-color)';
}

const successFunction = () => {
  successMessage.style.visibility = 'visible';
}

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const emailValue = email.value.trim();

  if(emailValue === '' || !isValidEmail(emailValue)) {
    successMessage.style.visibility = 'hidden';
    errorFunction();
  } else {
    errorMessage.style.visibility = 'hidden';
    errorIcon.style.visibility = 'hidden';
    email.style.border = '1px solid #dfc9cc';
    successFunction();
  }
}