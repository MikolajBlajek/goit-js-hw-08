import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener('input', throttle(saveFormData, 500));

window.addEventListener('load', () => {
  const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  emailInput.value = formData.email || '';
  messageInput.value = formData.message || '';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log('Form Data:', formData);

  localStorage.removeItem('feedback-form-state');

  emailInput.value = '';
  messageInput.value = '';
});

function saveFormData() {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}