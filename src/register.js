/* eslint-disable no-alert */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { registerUser, signGoogle } from './lib';

export function register(navigateTo) {
  const principalContainer = document.createElement('section');
  principalContainer.setAttribute('class', 'principal-container');
  const buttonReturn = document.createElement('button');
  buttonReturn.setAttribute('class', 'return');
  buttonReturn.setAttribute('id', 'return');
  const nameSocialContainer = document.createElement('section');
  nameSocialContainer.setAttribute('class', 'name-social-container');
  const img = document.createElement('img');
  img.setAttribute('class', 'logo');
  const nameSocial = document.createElement('h1');
  nameSocial.setAttribute('class', 'nameSocial');

  const registerContainer = document.createElement('section');
  registerContainer.setAttribute('class', 'containerInfo');
  const form = document.createElement('form');
  const inputName = document.createElement('input');
  inputName.setAttribute('class', 'inputInfo');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('id', 'idInputName');
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('class', 'inputInfo');
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('id', 'idInputEmail');
  const inputPass = document.createElement('input');
  inputPass.setAttribute('class', 'inputInfo');
  inputPass.setAttribute('type', 'password');
  inputPass.setAttribute('id', 'idInputPass');
  const buttonRegister = document.createElement('button');
  buttonRegister.setAttribute('class', 'buttonInfo');
  const connectWith = document.createElement('h4');
  connectWith.setAttribute('class', 'connect-with');
  const openGoogle = document.createElement('button');
  openGoogle.setAttribute('class', 'openGoogle');
  const iconGoogle = document.createElement('span');
  iconGoogle.setAttribute('class', 'icon-google');
  const textGoogle = document.createElement('span');
  textGoogle.setAttribute('class', 'text-google');

  img.src = 'imagen/LogoEnRutados.png';
  nameSocial.textContent = 'EnRutados';
  inputName.placeholder = 'Nombre Usuario';
  inputEmail.placeholder = 'Correo electrónico';
  inputPass.placeholder = 'Contraseña';
  buttonRegister.textContent = 'Registrate';
  connectWith.textContent = 'O conéctate con';
  textGoogle.textContent = 'Google';
  buttonReturn.textContent = 'Return';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  // Evento Sing Up

  buttonRegister.addEventListener('click', async () => {
    const email = document.getElementById('idInputEmail').value;
    const password = document.getElementById('idInputPass').value;
    const name = document.getElementById('idInputName').value;
    registerUser(email, password, name);

    if (!email || !password || !name) {
    // Manejar el caso de campos vacíos, por ejemplo, mostrar un mensaje al usuario
      console.error('Por favor, completa todos los campos.');
      alert('Por favor, completa todos los campos.');
      // Aquí puedes mostrar un mensaje al usuario indicando que ambos campos son obligatorios.
      return; // Detiene la ejecución si hay campos vacíos
    }
    try {
      registerUser(email, password, name);
      navigateTo('/dashboard');
    } catch (error) {
    // Manejar el error, por ejemplo, mostrar un mensaje al usuario
      console.error('Error durante el inicio de sesión:', error);
    // Aquí puedes mostrar un mensaje al usuario indicando que ha habido un problema con el inicio de sesión.
    }
  });
  // Agrega un evento de click para el botón de inicio de sesión con Google
  openGoogle.addEventListener('click', () => {
    signGoogle().then((rest) => navigateTo('/dashboard'));
  });
  openGoogle.append(iconGoogle, textGoogle);
  form.append(inputName, inputEmail, inputPass);
  nameSocialContainer.append(img, nameSocial);
  registerContainer.append(form, buttonRegister, connectWith, openGoogle);
  principalContainer.append(buttonReturn, nameSocialContainer, registerContainer);
  // console.log('este es el registro');
  return principalContainer;
}
