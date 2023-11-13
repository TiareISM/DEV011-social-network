// file home.js
import { signGoogle } from './lib/index.js';

export function home(navigateTo) {
  // ----- contenedor principal -----
  const principalContainer = document.createElement('section');
  principalContainer.setAttribute('class', 'principal-container');
  // ----- contenedor del nombre red social -----
  const nameSocialContainer = document.createElement('section');
  nameSocialContainer.setAttribute('class', 'name-social-container');
  const img = document.createElement('img');
  img.setAttribute('class', 'logo');
  const nameSocial = document.createElement('h1');
  nameSocial.setAttribute('class', 'nameSocial');
  // ----- contenedor sección home -----
  const sectionHome = document.createElement('section');
  sectionHome.setAttribute('class', 'containerInfo');
  const welcome = document.createElement('h2');
  welcome.setAttribute('class', 'welcome');
  const descriptionSocial = document.createElement('p');
  descriptionSocial.setAttribute('class', 'descriptionSocial');
  const buttonSignIn = document.createElement('button');
  buttonSignIn.setAttribute('class', 'signIn');
  const buttonSignUp = document.createElement('button');
  buttonSignUp.setAttribute('class', 'signUp');
  const connectWith = document.createElement('h6');
  connectWith.setAttribute('class', 'connect-with');
  const openGoogle = document.createElement('button');
  openGoogle.setAttribute('class', 'openGoogle');

 
  img.src = 'imagen/LogoEnRutados.png';
  nameSocial.textContent = 'EnRutados';
  welcome.textContent = 'Bienvenido';
  descriptionSocial.textContent = '¡Tu red social de viajes favoritas!';
  connectWith.textContent = 'O conectate con';
  buttonSignIn.textContent = 'Iniciar sesión';
  buttonSignIn.addEventListener('click', () => {
    navigateTo('/login');
  });
  buttonSignUp.textContent = 'Registrate';
  buttonSignUp.addEventListener('click', () => {
    navigateTo('/register');
  });

   // Agrega un evento de click para el botón de inicio de sesión con Google
   openGoogle.addEventListener('click', signGoogle);

  nameSocialContainer.append(img, nameSocial);
  sectionHome.append(welcome, descriptionSocial, buttonSignIn, buttonSignUp, connectWith, openGoogle);
  principalContainer.append(nameSocialContainer, sectionHome);

  return principalContainer;
}
