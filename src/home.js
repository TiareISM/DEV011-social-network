// file home.js
function home(navigateTo) {
    const sectionHome = document.createElement('section');
    sectionHome.setAttribute("class", "containerHome");
    const img = document.createElement('img');
    img.setAttribute("class", "logo");
    const welcome = document.createElement('h2');
    welcome.setAttribute("class", "welcome");
    const nameSocial = document.createElement('h1');
    nameSocial.setAttribute("class", "nameSocial");
    const descriptionSocial = document.createElement('h3');
    descriptionSocial.setAttribute("class", "descriptionSocial");
    const buttonOne = document.createElement('button');
    buttonOne.setAttribute("class", "signIn");
    const buttonTwo = document.createElement('button');
    buttonTwo.setAttribute("class", "signUp");    
    const description2Social = document.createElement('h4');
    description2Social.setAttribute("class", "description2Social");

    img.src = "imagen/LogoEnRutados.png";
    buttonOne.textContent = 'Iniciar sesión';
    buttonOne.addEventListener('click', () => {
      navigateTo('/login');
    });

    buttonTwo.textContent = 'Registrate';
    buttonTwo.addEventListener('click', () => {
      navigateTo('/login');
    });
  
    welcome.textContent = 'Bienvenido a';
    nameSocial.textContent = 'EnRutados';
    descriptionSocial.textContent = '¡Tu red social de viajes favoritas!';
    description2Social.textContent = 'O conectate con';
  
    sectionHome.append(img, welcome,nameSocial, descriptionSocial, buttonOne, buttonTwo, description2Social);
    console.log("soy el home");
    return sectionHome;
  }
  
  export default home;