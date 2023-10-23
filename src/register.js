import { registerUser, signGoogle } from './lib/index.js';

export function register(navigateTo) {
  const principalContainer = document.createElement('section');
  principalContainer.setAttribute('class', 'principal-container');
  const buttonReturn = document.createElement('button');
  buttonReturn.setAttribute('class', 'return');
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
  inputName.setAttribute('type','text');
  inputName.setAttribute('id','idInputName');
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('class', 'inputInfo');
  inputEmail.setAttribute('type','email');
  inputEmail.setAttribute('id','idInputEmail');
  const inputPass = document.createElement('input');
  inputPass.setAttribute('class', 'inputInfo');
  inputPass.setAttribute('type','password');
  inputPass.setAttribute('id', 'idInputPass');
  const buttonRegister = document.createElement('button');
  buttonRegister.setAttribute('class', 'buttonInfo');
  const connectWith = document.createElement('h4');
  connectWith.setAttribute('class', 'connect-with');
  const openGoogle = document.createElement('button');
  openGoogle.setAttribute('class', 'openGoogle');

  img.src = 'imagen/LogoEnRutados.png';
  nameSocial.textContent = ' EnRutados';
  inputName.placeholder = 'Nombre Usuario';
  inputEmail.placeholder = 'Correo electrónico';
  inputPass.placeholder = 'Contraseña';
  buttonRegister.textContent = 'Registrate';
  connectWith.textContent = 'O conéctate con';
  buttonReturn.textContent = 'Return';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

   // Evento Sing Up
   
   buttonRegister.addEventListener('click', () => {
     const email = document.getElementById('idInputEmail').value;
     const password = document.getElementById('idInputPass').value;
     const name = document.getElementById('idInputName').value;
     registerUser(email, password, name);
   });


  // Agrega un evento de click para el botón de inicio de sesión con Google
  openGoogle.addEventListener('click', signGoogle);

  form.append(inputName, inputEmail, inputPass);
  nameSocialContainer.append(img, nameSocial);
  registerContainer.append(form, buttonRegister, connectWith, openGoogle);
  principalContainer.append(buttonReturn, nameSocialContainer, registerContainer);
  console.log('este es el registro');
  return principalContainer;
}


export default register;
