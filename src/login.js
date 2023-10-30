// file login finished
import { auth, signGoogle, signIn } from "./lib/index.js";

function login(navigateTo) {
  // ----- contenedor principal ----
  const principalContainer = document.createElement("section");
  principalContainer.setAttribute("class", "principal-container");
  const buttonReturn = document.createElement("button");
  buttonReturn.setAttribute("class", "return");
  // ----- contenedor nombre red social ----
  const containerName = document.createElement("section");
  containerName.setAttribute("class", "containerName");
  const img = document.createElement("img");
  img.setAttribute("class", "logo");
  const nameSocial = document.createElement("h1");
  nameSocial.setAttribute("class", "nameSocial");
  // ----- contenedor login -----
  const containerSingIn = document.createElement("section");
  containerSingIn.setAttribute("class", "containerInfo");
  const form = document.createElement("form");
  const inputEmail = document.createElement("input");
  inputEmail.setAttribute("class", "inputInfo");
  inputEmail.setAttribute("id", "idInputEmail");
  inputEmail.setAttribute("autocomplete", "current-password");
  const inputPass = document.createElement("input");
  inputPass.setAttribute("class", "inputInfo");
  inputPass.setAttribute("id", "idInputPass");
  inputPass.setAttribute("type", "password");
  inputPass.setAttribute("autocomplete", "current-password");
  const buttonSignIn = document.createElement("button");
  buttonSignIn.setAttribute("class", "signIn");
  // const forgetPassword = document.createElement('input');
  const connectWith = document.createElement("h4");
  connectWith.setAttribute("class", "connect-with");
  const openGoogle = document.createElement("button");
  openGoogle.setAttribute("class", "openGoogle");

  img.src = "imagen/LogoEnRutados.png";
  nameSocial.textContent = " EnRutados";
  inputEmail.placeholder = "Correo electrónico";
  inputPass.placeholder = "Contraseña";
  buttonSignIn.textContent = "Iniciar sesión";
  connectWith.textContent = "O conéctate con";

  buttonReturn.textContent = "Return";
  buttonReturn.addEventListener("click", () => {
    navigateTo("/");
  });

  // Agrega un evento de click para el botón de inicio de sesión
  buttonSignIn.addEventListener('click', () => {
    const email = document.getElementById('idInputEmail').value;
    const password = document.getElementById('idInputPass').value;
    signIn(email, password);
    navigateTo('/dashboard');
  });

  // Agrega un evento de click para el botón de inicio de sesión con Google
  openGoogle.addEventListener("click", signGoogle);
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

  form.append(inputEmail, inputPass);
  containerName.append(img, nameSocial);
  containerSingIn.append(form, buttonSignIn, connectWith, openGoogle);
  principalContainer.append(buttonReturn, containerName, containerSingIn);

  return principalContainer;
}

export default login;
