'use strict';

const form = document.querySelector('.form');
const input = document.querySelector('.form__input');
const error = document.querySelector('.form__error');

form.addEventListener('submit', evt => {
  evt.preventDefault();

  if (!input.validity.valid) {
    input.classList.add('form__input--invalid');
    error.classList.add('form__error--active');
  }
});

input.addEventListener('input', () => {
  input.classList.remove('form__input--invalid');
  error.classList.remove('form__error--active');

  if (input.value !== '') {
    input.classList.add('form__input--active');
  }
});
