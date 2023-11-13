/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
/* eslint-disable no-alert */
/* eslint-disable no-console */
import {
  addPost, logout, paintRealTime, giveLike, auth, unGiveLike, deletePost, editPost,
} from './lib';

export function dashboard() {
  // ----- contenedor del nombre red social -----
  const containerDashbord = document.createElement('section');
  containerDashbord.setAttribute('class', 'container-dashbord');
  const nameSocial = document.createElement('header');
  nameSocial.setAttribute('class', 'name-social');
  const img = document.createElement('img');
  img.setAttribute('class', 'logo-dash');
  const welcomeUser = document.createElement('p');
  welcomeUser.setAttribute('class', 'welcome-user');
  const user = auth.currentUser;
  const userEmail = user ? user.displayName || user.email : '';
  const welcomeMessage = document.createElement('p');
  welcomeMessage.setAttribute('class', 'welcome-message');
  welcomeMessage.textContent = `Bienvenido, ${userEmail} <3!`;
  // ----- contenedor filtros-----
  /* const filterContainer = document.createElement('nav');
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
  imgFood.setAttribute('class', 'food'); */
  // ----- contenedor publicaciones----
  const wallContainer = document.createElement('main');
  wallContainer.setAttribute('class', 'wall-container');
  const postSection = document.createElement('div');
  postSection.setAttribute('class', 'section-post');
  postSection.setAttribute('id', 'post-section');
  //  ----- Contenedor de menu------
  const navigationBar = document.createElement('nav');
  navigationBar.setAttribute('class', 'navigation-bar');
  const listNavigation = document.createElement('ul');
  listNavigation.setAttribute('class', 'list-navigation');
  /* const liSearch = document.createElement('li');
  liSearch.setAttribute('class', 'li-search');
  liSearch.textContent = 'Búsqueda'; */
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
  const buttonClose = document.createElement('button');
  buttonClose.setAttribute('class', 'cerrar-modal');
  buttonClose.textContent = 'x';
  const liProfile = document.createElement('li');
  liProfile.setAttribute('class', 'li-profile');
  liProfile.textContent = 'Perfil';
  // Botón para cerrar sesión
  const logoutButton = document.createElement('button');
  logoutButton.setAttribute('class', 'logout-button');
  logoutButton.textContent = 'Cerrar Sesión';
  // Crear un div para el modal
  const modal = document.createElement('div');
  modal.classList.add('modal-post');
  form.appendChild(sendComment);
  form.appendChild(buttonSend);
  form.appendChild(buttonClose);
  // Agregar el formulario al modal
  modal.appendChild(form);
  // para cerrar el modal de subir publicación
  buttonClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });
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
  // para modal de form
  liUpload.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.appendChild(modal);
  });
  // Función para el botón
  logoutButton.addEventListener('click', () => {
    logout();
  });

  img.src = 'imagen/logotipo.png';
  /* imgTransport.src = 'imagen/transporteBl.png';
  imgHostal.src = 'imagen/alojamientoBl.png';
  imgFood.src = 'imagen/food.png'; */
  buttonSend.textContent = 'Publicar';

  // -----Crear Publicación-----
  paintRealTime((querySnapshot) => {
    postSection.textContent = ' ';
    querySnapshot.forEach((doc) => {
      const postContainer = document.createElement('div');
      postContainer.setAttribute('class', 'post-container');
      const postNew = document.createElement('div');
      postNew.setAttribute('class', 'post');
      const reaccion = document.createElement('section');
      reaccion.setAttribute('class', 'reaccion');
      const buttonLike = document.createElement('button');
      buttonLike.setAttribute('class', 'button-border');
      const imgLike = document.createElement('img');
      imgLike.setAttribute('class', 'img-like');
      const buttonEdit = document.createElement('button');
      buttonEdit.setAttribute('class', 'button-border');
      buttonEdit.setAttribute('id', 'edit');
      const imgEdit = document.createElement('img');
      imgEdit.setAttribute('class', 'img-edit');
      const buttonDelete = document.createElement('button');
      buttonDelete.setAttribute('class', 'button-border');
      buttonDelete.setAttribute('id', 'delete');
      const imgDelete = document.createElement('img');
      imgDelete.setAttribute('class', 'img-like');
      const counter = document.createElement('p');
      counter.setAttribute('class', 'counter-like');
      counter.textContent = doc.data().counterLikes.length;
      /* const buttonComment = document.createElement('button');
      buttonComment.setAttribute('class', 'comment');
      const imgComment = document.createElement('img');
      imgComment.setAttribute('class', 'img-comment'); */
      imgLike.src = 'imagen/like.png';
      imgDelete.src = 'imagen/eliminar.png';
      // imgComment.src = 'imagen/comentario.png';
      imgEdit.src = 'imagen/edit.png';
      postNew.textContent = doc.data().post;
      // buttonComment.value = doc.data().comment;
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
      const closeModalButton = document.createElement('button');
      closeModalButton.textContent = 'x';
      closeModalButton.setAttribute('class', 'close-modal-button');
      const editModal = document.createElement('div');
      editModal.classList.add('modal');
      const editPostContent = document.createElement('input');
      editPostContent.setAttribute('type', 'text');
      editPostContent.setAttribute('class', 'text-input');
      const saveEditButton = document.createElement('button');
      saveEditButton.textContent = 'Guardar cambios';
      saveEditButton.setAttribute('class', 'save-edit-button');
      // Abre el modal cuando se hace clic en el botón "Editar Publicación"
      buttonEdit.addEventListener('click', () => {
        editModal.style.display = 'block';
        document.body.appendChild(editModal);
        editPostContent.value = ''; // Puedes establecer el contenido actual aquí
      });
      // Cierra el modal cuando se hace clic en la "X" o en el fondo oscuro
      closeModalButton.addEventListener('click', () => {
        editModal.style.display = 'none';
      });

      editModal.addEventListener('click', (event) => {
        if (event.target === editModal) {
          editModal.style.display = 'none';
        }
      });

      // Guarda los cambios y cierra el modal
      saveEditButton.addEventListener('click', () => {
        const newContent = editPostContent.value;
        const postId = doc.id;
        if (doc.data().email === auth.currentUser.email) {
          editPost(postId, newContent);
        } else {
          alert('No puedes editar esta publicación');
        }
        editModal.style.display = 'none';
      });
      reaccion.append(buttonLike, counter, buttonEdit, buttonDelete);
      postContainer.append(postNew, reaccion);
      postSection.append(postContainer);
      buttonLike.append(imgLike);
      buttonDelete.append(imgDelete);
      buttonEdit.append(imgEdit);
      editModal.append(editPostContent, saveEditButton, closeModalButton);
    });
  });
  /* filterContainer.append(
    ulFilter,
    filterTransport,
    filterHostal,
    filterRestaurant,
  );
  filterTransport.append(imgTransport);
  filterHostal.append(imgHostal);
  filterRestaurant.append(imgFood);
  nameSocial.append(filterContainer); */
  nameSocial.append(img, welcomeMessage);
  wallContainer.append(postSection);
  navigationBar.append(listNavigation);
  listNavigation.append(
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
