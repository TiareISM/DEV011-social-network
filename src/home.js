/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// file home.js
import { auth, signGoogle } from './lib/index.js';

const user = auth.currentUser;
console.log(user);

export function home(navigateTo) {
  // ----- contenedor principal -----
  const principalContainer = document.createElement('section');
  principalContainer.setAttribute('class', 'principal-container');
  // ----- contenedor del nombre red social -----
  const nameSocialContainer = document.createElement('section');
  nameSocialContainer.setAttribute('class', 'name-social-container');
  const img = document.createElement('img');
  img.setAttribute('class', 'logo');
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
  const iconGoogle = document.createElement('span');
  iconGoogle.setAttribute('class', 'icon-google');
  const textGoogle = document.createElement('span');
  textGoogle.setAttribute('class', 'text-google');

  img.src = 'imagen/logo-gr.png';
  welcome.textContent = 'Bienvenido';
  descriptionSocial.textContent = '¡Tu red social de viajes favorita!';
  connectWith.textContent = 'O conectate con';
  textGoogle.textContent = 'Google';
  buttonSignIn.textContent = 'Iniciar sesión';
  buttonSignIn.addEventListener('click', () => {
    navigateTo('/login');
  });
  buttonSignUp.textContent = 'Registrate';
  buttonSignUp.addEventListener('click', () => {
    navigateTo('/register');
  });
  // Agrega un evento de click para el botón de inicio de sesión con Google
  openGoogle.addEventListener('click', () => {
    signGoogle().then((rest) => navigateTo('/dashboard'));
  });
  openGoogle.append(iconGoogle, textGoogle);
  nameSocialContainer.append(img);
  sectionHome.append(
    welcome,
    descriptionSocial,
    buttonSignIn,
    buttonSignUp,
    connectWith,
    openGoogle,
  );
  principalContainer.append(nameSocialContainer, sectionHome);

  return principalContainer;
}
