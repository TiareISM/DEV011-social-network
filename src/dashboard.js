/* eslint-disable no-alert */
/* eslint-disable no-console */
import {
  addPost, logout, paintRealTime, giveLike, auth, unGiveLike, deletePost,
} from './lib';

export function dashboard() {
  // ----- contenedor del nombre red social -----
  const containerDashbord = document.createElement('section');
  containerDashbord.setAttribute('class', 'container-dashbord');
  const nameSocial = document.createElement('header');
  nameSocial.setAttribute('class', 'name-social');
  const img = document.createElement('img');
  img.setAttribute('class', 'logo');
  const welcomeUser = document.createElement('p');
  welcomeUser.setAttribute('class', 'welcome-user');
  // ----- contenedor filtros-----
  const filterContainer = document.createElement('nav');
  filterContainer.setAttribute('class', 'filter-container');
  const ulFilter = document.createElement('ul');
  ulFilter.setAttribute('class', 'ul-filter');
  const filterTransport = document.createElement('li');
  filterTransport.setAttribute('class', 'filter transport');
  filterTransport.setAttribute('id', 'filter-transport');
  const imgTransport = document.createElement('img');
  imgTransport.setAttribute('class', 'transport');
  const filterHostal = document.createElement('li');
  filterHostal.setAttribute('class', 'filter hostal');
  filterHostal.setAttribute('id', 'filter-hostal');
  const imgHostal = document.createElement('img');
  imgHostal.setAttribute('class', 'hostal');
  const filterRestaurant = document.createElement('li');
  filterRestaurant.setAttribute('class', 'filter food');
  filterRestaurant.setAttribute('id', 'filter-restaurant');
  const imgFood = document.createElement('img');
  imgFood.setAttribute('class', 'food');
  // ----- contenedor publicaciones----
  const wallContainer = document.createElement('section');
  wallContainer.setAttribute('class', 'wall-container');
  const wallPost = document.createElement('section');
  wallContainer.setAttribute('class', 'wall-post');
  const postSection = document.createElement('article');
  postSection.setAttribute('class', 'post');
  postSection.setAttribute('id', 'post-section');
  //  ----- Contenedor de menu------
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
  liUpload.setAttribute('class', 'li-upload');
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
      const inputPost = form.querySelector('#sendComment');
      const post = inputPost.value;
      // Llamar a la función para agregar publicación y subir imagen a Firebase
      addPost(post, auth.currentUser.email);
      inputPost.value = '';
      // Cerrar el modal después de enviar la publicación
      modal.style.display = 'none';
    });
  });
  // Función para el botón
  logoutButton.addEventListener('click', () => {
    logout();
  });

  img.src = 'imagen/EnRutados-logo-pq.png';
  imgTransport.src = 'imagen/transporteBl.png';
  imgHostal.src = 'imagen/alojamientoBl.png';
  imgFood.src = 'imagen/food.png';
  buttonSend.textContent = 'Publicar';

  // -----Crear Publicación-----
  paintRealTime((querySnapshot) => {
    postSection.textContent = ' ';
    querySnapshot.forEach((doc) => {
      const postNew = document.createElement('input');
      postNew.setAttribute('class', 'post');
      const buttonLike = document.createElement('button');
      buttonLike.setAttribute('class', 'like');
      const imgLike = document.createElement('img');
      imgLike.setAttribute('class', 'img-like');
      const buttonDelete = document.createElement('button');
      const imgDelete = document.createElement('img');
      imgDelete.setAttribute('class', 'img-like');
      const counter = document.createElement('p');
      counter.setAttribute('class', 'counter-like');
      counter.textContent = doc.data().counterLikes.length;
      const buttonComment = document.createElement('button');
      buttonComment.setAttribute('class', 'comment');
      imgLike.src = 'imagen/like.png';
      imgDelete.src = 'imagen/delete.png';
      postNew.value = doc.data().post;
      buttonComment.value = doc.data().comment;
      buttonDelete.value = doc.data().comment;
      console.log('id email de usuarix: ', auth.currentUser.email);

      // ----- Llamar función Like-----
      buttonLike.addEventListener('click', (event) => {
        event.preventDefault();
        const postId = doc.id;
        if (!doc.data().counterLikes.includes(auth.currentUser.email)) {
          giveLike(postId, auth.currentUser.email);
        } else {
          unGiveLike(postId, auth.currentUser.email);
        }
        console.log('data del documento: ', doc.data());
        // counter.textContent = doc.data().counterLikes.length;
        console.log(doc.data().counterLikes.length);
      });
      // ----- Borrar publicación -----
      buttonDelete.addEventListener('click', () => {
        const postId = doc.id;
        if (doc.data().email === auth.currentUser.email) {
          deletePost(postId, auth.currentUser.email);
        } else {
          alert('No puedes eliminar esta publicación');
        }
      });

      postSection.append(postNew, buttonLike, counter, buttonComment, buttonDelete);
      buttonLike.append(imgLike);
      buttonDelete.append(imgDelete);
    });
  });
  filterContainer.append(
    ulFilter,
    filterTransport,
    filterHostal,
    filterRestaurant,
  );
  filterTransport.append(imgTransport);
  filterHostal.append(imgHostal);
  filterRestaurant.append(imgFood);
  nameSocial.append(img, filterContainer);
  wallPost.append(postSection);
  wallContainer.append(wallPost);
  navigationBar.append(
    listNavigation,
    liSearch,
    liHome,
    liUpload,
    liProfile,
    logoutButton,
  );
  containerDashbord.append(
    nameSocial,
    wallContainer,
    navigationBar,
  );

  return containerDashbord;
}
