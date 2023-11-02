import { addPost, logout, paintRealTime } from './lib';

export function dashboard() {
  // ----- contenedor del nombre red social -----
  const containerDashbord = document.createElement('section');
  const nameSocialContainer = document.createElement('header');
  nameSocialContainer.setAttribute('class', 'name-social-container');
  const img = document.createElement('img');
  img.setAttribute('class', 'logo');
  const nameSocial = document.createElement('h1');
  nameSocial.setAttribute('class', 'nameSocial');
  const welcomeUser = document.createElement('p');
  welcomeUser.setAttribute('class', 'welcome-user');
  // ----- contenedor filtros-----
  const filterContainer = document.createElement('nav');
  filterContainer.setAttribute('class', 'filter-container');
  const ulFilter = document.createElement('ul');
  ulFilter.setAttribute('class', 'ul-filter');
  const filterTransport = document.createElement('li');
  filterTransport.setAttribute('class', 'filter-wall');
  filterTransport.setAttribute('id', 'filter-transport');
  const filterHostal = document.createElement('li');
  filterHostal.setAttribute('class', 'filter-hostal');
  filterHostal.setAttribute('id', 'filter-hostal');
  const filterRestaurant = document.createElement('li');
  filterRestaurant.setAttribute('class', 'filter-wall');
  filterRestaurant.setAttribute('id', 'filter-restaurant');
  // ----- contenedor publicaciones----
  const wallContainer = document.createElement('section');
  wallContainer.setAttribute('class', 'wall-container');
  const wallPost = document.createElement('section');
  wallContainer.setAttribute('class', 'wall-post');
  const postSection = document.createElement('article');
  postSection.setAttribute('class', 'post');
  postSection.setAttribute('id', 'post-section');
  //----- Contenedor de li------
  const navigationBar = document.createElement('nav');
  navigationBar.setAttribute('class', 'navigation-bar');
  const listNavigation = document.createElement('ul');
  listNavigation.setAttribute('class', 'list-navigation');
  const liSearch = document.createElement('li');
  liSearch.setAttribute('class', 'li-search');
  liSearch.textContent = 'Búsqueda';
  const liHome = document.createElement('li');
  liHome.setAttribute('class', 'li-home');
  liHome.textContent = 'Inicio';
  const liUpload = document.createElement('li');
  liUpload.textContent = 'Subir';
  // -----Para subir publicaciones-----
  const form = document.createElement('form');
  form.setAttribute('id', 'postForm');
  const sendComment = document.createElement('input');
  sendComment.setAttribute('class', 'comentario');
  sendComment.setAttribute('id', 'sendComment');
  const buttonSend = document.createElement('button');
  buttonSend.setAttribute('class', 'enviar-comentario');
  buttonSend.setAttribute('id', 'buttonSend');
  buttonSend.setAttribute('type', 'submit');
  liUpload.setAttribute('class', 'li-upload');

  const liProfile = document.createElement('li');
  liProfile.setAttribute('class', 'li-profile');
  liProfile.textContent = 'Perfil';
  // Botón para cerrar sesión
  const logoutButton = document.createElement('button');
  logoutButton.setAttribute('class', 'logout-button');
  logoutButton.textContent = 'Cerrar Sesión';

  // para modal de form
  liUpload.addEventListener('click', () => {
    // Crear un div para el modal
    const modal = document.createElement('div');
    modal.classList.add('modal');
    form.appendChild(sendComment);
    form.appendChild(buttonSend);
    // Agregar el formulario al modal
    modal.appendChild(form);
    // Mostrar el modal en la página
    document.body.appendChild(modal);
    // Escuchar evento de envío del formulario
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const post = form.querySelector('#sendComment').value;

      // Llamar a la función para agregar publicación y subir imagen a Firebase
      addPost(post);
      post.value = '';
      // Cerrar el modal después de enviar la publicación
      modal.style.display = 'none';
    });
  });
  // Función para el botón
  logoutButton.addEventListener('click', () => {
    logout();
  });

  img.src = 'imagen/LogoEnRutados.png';
  nameSocial.textContent = 'EnRutados';
  buttonSend.textContent = 'Publicar';

  filterContainer.append(
    ulFilter,
    filterTransport,
    filterHostal,
    filterRestaurant,
  );
  nameSocialContainer.append(img, nameSocial, filterContainer);
  wallPost.append(postSection);

  paintRealTime((querySnapshot) => {
    postSection.textContent = ' ';
    querySnapshot.forEach((doc) => {
      const postNew = document.createElement('input');
      postNew.setAttribute('class', 'post');
      const buttonLike = document.createElement('button');
      buttonLike.setAttribute('class', 'like');
      const buttonComment = document.createElement('button');
      buttonComment.setAttribute('class', 'comment');
      postNew.value = doc.data().post;
      buttonLike.value = doc.data().like;
      buttonComment.value = doc.data().comment

      postSection.append(postNew,buttonLike,buttonComment);
    });
  });

  wallContainer.append(
    wallPost,
  );
  navigationBar.append(
    listNavigation,
    liSearch,
    liHome,
    liUpload,
    liProfile,
  );
  containerDashbord.append(
    nameSocialContainer,
    wallContainer,
    navigationBar,
    logoutButton,
  );

  return containerDashbord;
}