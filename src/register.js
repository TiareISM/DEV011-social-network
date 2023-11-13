import { registerUser, signGoogle } from './lib';

export function register(navigateTo) {
  document.addEventListener('DOMContentLoaded', () => {
    const principalContainer = document.createElement('section');
    principalContainer.setAttribute('class', 'principal-container');
    const buttonReturn = document.createElement('button');
    buttonReturn.setAttribute('class', 'return');
    buttonReturn.setAttribute('id', 'return');
    const imgReturn = document.createElement('img');
    imgReturn.setAttribute('class', 'return');
    const nameSocialContainer = document.createElement('section');
    nameSocialContainer.setAttribute('class', 'name-social-container');
    const img = document.createElement('img');
    img.setAttribute('class', 'logo');
    // -----Sesión de datos Registro-----
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
    // -----Sesión Ingresar con Google-----
    const connectWith = document.createElement('h4');
    connectWith.setAttribute('class', 'connect-with');
    const openGoogle = document.createElement('button');
    openGoogle.setAttribute('class', 'openGoogle');
    const iconGoogle = document.createElement('span');
    iconGoogle.setAttribute('class', 'icon-google');
    const textGoogle = document.createElement('span');
    textGoogle.setAttribute('class', 'text-google');

    img.src = 'imagen/logo-gr.png';
    imgReturn.src = 'imagen/return.png';
    inputName.placeholder = 'Nombre Usuario';
    inputEmail.placeholder = 'Correo electrónico';
    inputPass.placeholder = 'Contraseña';
    buttonRegister.textContent = 'Registrate';
    connectWith.textContent = 'O conéctate con';
    textGoogle.textContent = 'Google';
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
        alert('Por favor, completa todos los campos.');
        return; // Detiene la ejecución si hay campos vacíos
      }
      try {
        registerUser(email, password, name);
        navigateTo('/dashboard');
      } catch (error) {
        alert('Error durante el inicio de sesión');
      }
    });
    // Agrega un evento de click para el botón de inicio de sesión con Google
    openGoogle.addEventListener('click', () => {
      signGoogle().then((rest) => navigateTo('/dashboard'));
    });

    openGoogle.append(iconGoogle, textGoogle);
    form.append(inputName, inputEmail, inputPass);
    nameSocialContainer.append(img);
    buttonReturn.append(imgReturn);
    registerContainer.append(form, buttonRegister, connectWith, openGoogle);
    principalContainer.append(buttonReturn, nameSocialContainer, registerContainer);
    // console.log('este es el registro');
    return principalContainer;
  });
}
