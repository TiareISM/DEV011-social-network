// file home.js
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export function home(navigateTo) {
  const sectionHome = document.createElement('section');
  sectionHome.setAttribute('class', 'containerHome');
  const img = document.createElement('img');
  img.setAttribute('class', 'logo');
  const welcome = document.createElement('h2');
  welcome.setAttribute('class', 'welcome');
  const nameSocial = document.createElement('h1');
  nameSocial.setAttribute('class', 'nameSocial');
  const descriptionSocial= document.createElement('h3');
  descriptionSocial.setAttribute('class', 'descriptionSocial');
  const buttonOne = document.createElement('button');
  buttonOne.setAttribute('class', 'signIn');
  const buttonTwo = document.createElement('button');
  buttonTwo.setAttribute('class', 'signUp');
  const description2Social = document.createElement('h4');
  description2Social.setAttribute('class', 'description2Social');
  const openGoogle = document.createElement('button');
  openGoogle.setAttribute('class', 'openGoogle');
  

  img.src = 'imagen/LogoEnRutados.png';
  buttonOne.textContent = 'Iniciar sesión';
  buttonOne.addEventListener('click', () => {
    navigateTo('/login');
  });

  buttonTwo.textContent = 'Registrate';
  buttonTwo.addEventListener('click', () => {
    navigateTo('/login');
  });
  // Agrega un evento de click para el botón de inicio de sesión con Google
  openGoogle.addEventListener('click', async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      // Inicio de sesión con Google exitoso
      // Puedes agregar una redirección o lógica adicional aquí
    } catch (error) {
      console.error('Google login error', error);
      // Maneja los errores de inicio de sesión con Google
    }
  });

  welcome.textContent = 'Bienvenido';
  nameSocial.textContent = 'EnRutados';
  descriptionSocial.textContent = '¡Tu red social de viajes favoritas!';
  description2Social.textContent = 'O conectate con';

  sectionHome.append(img, welcome, nameSocial, descriptionSocial, buttonOne, buttonTwo, description2Social, openGoogle);
  console.log('soy el home');
  return sectionHome;
}
