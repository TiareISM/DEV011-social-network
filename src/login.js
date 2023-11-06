/* eslint-disable quotes */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
// file login finished
import { auth, signGoogle, signIn } from './lib/index.js';

function login(navigateTo) {
  // ----- contenedor principal ----
  const principalContainer = document.createElement('section');
  principalContainer.setAttribute('class', 'principal-container');
  const buttonReturn = document.createElement('button');
  buttonReturn.setAttribute('class', 'return');
  // ----- contenedor nombre red social ----
  const containerName = document.createElement('section');
  containerName.setAttribute('class', 'containerName');
  const img = document.createElement('img');
  img.setAttribute('class', 'logo');
  const nameSocial = document.createElement('h1');
  nameSocial.setAttribute('class', 'nameSocial');
  // ----- contenedor login -----
  const containerSingIn = document.createElement('section');
  containerSingIn.setAttribute('class', 'containerInfo');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('class', 'inputInfo');
  inputEmail.setAttribute('id', 'idInputEmail');
  inputEmail.setAttribute('autocomplete', 'current-password');
  const inputPass = document.createElement('input');
  inputPass.setAttribute('class', 'inputInfo');
  inputPass.setAttribute('id', 'idInputPass');
  inputPass.setAttribute('type', 'password');
  inputPass.setAttribute('autocomplete', 'current-password');
  const buttonSignIn = document.createElement('button');
  buttonSignIn.setAttribute('class', 'signIn');
  // const forgetPassword = document.createElement('input');
  const connectWith = document.createElement('h4');
  connectWith.setAttribute('class', 'connect-with');
  const openGoogle = document.createElement('button');
  openGoogle.setAttribute('class', 'openGoogle');
  const iconGoogle = document.createElement('span');
  iconGoogle.setAttribute('class', 'icon-google');
  const textGoogle = document.createElement('span');
  textGoogle.setAttribute('class', 'text-google');

  img.src = 'imagen/LogoEnRutados.png';
  nameSocial.textContent = ' EnRutados';
  inputEmail.placeholder = 'Correo electrónico';
  inputPass.placeholder = 'Contraseña';
  buttonSignIn.textContent = 'Iniciar sesión';
  connectWith.textContent = 'O conéctate con';
  textGoogle.textContent = 'Google';

  buttonReturn.textContent = 'Return';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  // Agrega un evento de click para el botón de inicio de sesión
  buttonSignIn.addEventListener('click', async () => {
    const email = document.getElementById('idInputEmail').value;
    const password = document.getElementById('idInputPass').value;

    if (!email || !password) {
      // Manejar el caso de campos vacíos, por ejemplo, mostrar un mensaje al usuario
      console.error('Por favor, completa todos los campos.');
      alert('Por favor, completa todos los campos.');
      // Aquí puedes mostrar un mensaje al usuario indicando que ambos campos son obligatorios.
      return; // Detiene la ejecución si hay campos vacíos
    }
    try {
      await signIn(email, password);
      navigateTo('/dashboard');
    } catch (error) {
      // Manejar el error, por ejemplo, mostrar un mensaje al usuario
      // eslint-disable-next-line no-console
      console.error('Error durante el inicio de sesión:', error);
      // Aquí puedes mostrar un mensaje al usuario indicando que ha
      // habido un problema con el inicio de sesión.
    }
  });

  // Agrega un evento de click para el botón de inicio de sesión con Google
  openGoogle.addEventListener('click', () => {
    signGoogle().then((rest) => navigateTo('/dashboard'));
  });

  const user = auth.currentUser;
  if (user !== null) {
    user.providerData.forEach((profile) => {
      // console.log(`Sign-in provider: ${profile.providerId}`);
      // console.log(`  Provider-specific UID: ${profile.uid}`);
      // console.log(`  Name: ${profile.displayName}`);
      // console.log(`  Email: ${profile.email}`);
      // console.log(`  Photo URL: ${profile.photoURL}`);
    });
  }
  openGoogle.append(iconGoogle, textGoogle);
  form.append(inputEmail, inputPass);
  containerName.append(img, nameSocial);
  containerSingIn.append(form, buttonSignIn, connectWith, openGoogle);
  principalContainer.append(buttonReturn, containerName, containerSingIn);

  return principalContainer;
}

export default login;
