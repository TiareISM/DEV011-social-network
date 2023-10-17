// file login finished
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

function login(navigateTo) {
  const buttonReturn = document.createElement('button');
  buttonReturn.setAttribute('class', 'return');
  const sectionContainerName = document.createElement('section');
  sectionContainerName.setAttribute('class', 'containerName');
  const img = document.createElement('img');
  img.setAttribute('class', 'logo');
  const nameSocial = document.createElement('h1');
  nameSocial.setAttribute('class', 'nameSocial');
  const sectionContainerSingIn = document.createElement('section');
  sectionContainerSingIn.setAttribute('class', 'containerSingIn');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonLogin = document.createElement('button');
  const forgetPassword = document.createElement('input');
  const openGoogle = document.createElement('button');
  img.src = 'imagen/LogoEnRutados.png';
  inputEmail.placeholder = 'Write email';
  inputPass.placeholder = 'pass';

  nameSocial.textContent = 'Login';
  buttonLogin.textContent = 'go';
  openGoogle.textContent = 'Conectate con Google';

  buttonReturn.textContent = 'Return to home';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
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

  form.append(inputEmail, inputPass, buttonLogin);
  sectionContainerName.append(img, nameSocial, form, buttonReturn, openGoogle);

  return sectionContainerName;
}

export default login;
