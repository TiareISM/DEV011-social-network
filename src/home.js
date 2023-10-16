// file home.js
function home(navigateTo) {
    const sectionHome = document.createElement('section');
    sectionHome.setAttribute("class", "containerHome");
    const welcome = document.createElement('h2');
    welcome.setAttribute("class", "welcome");
    const nameSocial = document.createElement('h1');
    nameSocial.setAttribute("class", "nameSocial");
    const buttonOne = document.createElement('button');
    buttonOne.setAttribute("class", "signIn")
    const buttonTwo = document.createElement('button');
    buttonTwo.setAttribute("class", "signUp")
    const img = document.createElement('img');
    img.setAttribute("class", "logo")

    img.src = "imagen/LogoEnRutados.png";
    buttonOne.textContent = 'Iniciar sesión';
    buttonOne.addEventListener('click', () => {
      navigateTo('/login');
    });

    buttonTwo.textContent = 'Registrate';
    buttonTwo.addEventListener('click', () => {
      navigateTo('/login');
    });
  
    welcome.textContent = 'Bienvenido';
    nameSocial.textContent = 'EnRutados';
  
    sectionHome.append(welcome, buttonOne, buttonTwo, img, nameSocial);
    console.log("soy el home");
    return sectionHome;
  }
  
  export default home;