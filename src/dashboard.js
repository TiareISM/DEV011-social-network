/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
/* eslint-disable no-alert */
/* eslint-disable no-console */

import {
  addPost, logout, paintRealTime, giveLike, auth, unGiveLike, deletePost, editPost,
} from './lib';

import edit from './imagen/edit.png';
import eliminar from './imagen/eliminar.png';
import like from './imagen/like.png';
import logotipo from './imagen/logotipo.png';

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
  welcomeMessage.textContent = `Hola, ${userEmail} <3!`;
  // ----- contenedor publicaciones----
  const postSection = document.createElement('div');
  postSection.setAttribute('class', 'section-post');
  postSection.setAttribute('id', 'post-section');
  //  ----- Contenedor de menu------
  const navigationBar = document.createElement('nav');
  navigationBar.setAttribute('class', 'navigation-bar');
  const listNavigation = document.createElement('ul');
  listNavigation.setAttribute('class', 'list-navigation');
  const liHome = document.createElement('li');
  liHome.setAttribute('class', 'li-home');
  liHome.textContent = 'Inicio';
  const liUpload = document.createElement('li');
  liUpload.setAttribute('class', 'li-upload');
  liUpload.textContent = 'Subir';
  // -----Para subir publicaciones-----
  const form = document.createElement('form');
  form.setAttribute('id', 'postForm');
  form.setAttribute('class', 'content-modal');
  const upload = document.createElement('div');
  upload.setAttribute('class', 'upload');
  upload.textContent = 'Crear nueva publicación';
  const sendComment = document.createElement('input');
  sendComment.setAttribute('class', 'text-input');
  sendComment.setAttribute('id', 'sendComment');
  const buttonSend = document.createElement('button');
  buttonSend.setAttribute('class', 'save-modal');
  buttonSend.setAttribute('id', 'buttonSend');
  buttonSend.setAttribute('type', 'submit');
  const buttonClose = document.createElement('button');
  buttonClose.setAttribute('class', 'close-modal');
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
  modal.classList.add('modal');
  form.appendChild(upload);
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
    // Verificar si el campo de texto no está vacío antes de agregar la publicación
    if (post !== '') {
      // Llamar a la función para agregar la publicación y subir a Firebase
      addPost(post, auth.currentUser.email);
      inputPost.value = '';
    }
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

  img.src = logotipo;
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
      const postUser = document.createElement('p');
      postUser.setAttribute('class', 'post-user');
      postUser.textContent = `${doc.data().username || ''}`;
      console.log('name:', doc.data().username || '');
      const postNew = document.createElement('div');
      postNew.setAttribute('class', 'post');
      postNew.setAttribute('id', 'post');
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
      imgLike.src = like;
      imgDelete.src = eliminar;
      imgEdit.src = edit;
      // codigo para que los iconos salgan solo si es tu post
      if (doc.data().email === auth.currentUser.email) {
        imgDelete.style.display = 'block';
      } else {
        imgDelete.style.display = 'none';
      }
      if (doc.data().email === auth.currentUser.email) {
        imgEdit.style.display = 'block';
      } else {
        imgEdit.style.display = 'none';
      }
      postNew.textContent = doc.data().post;

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
          // Pregunta al usuario si realmente quiere eliminar la publicación
          const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar esta publicación?');

          if (confirmDelete) {
            // Si el usuario confirma, elimina la publicación
            deletePost(postId, auth.currentUser.email);
          } else {
            // Si el usuario cancela, no hagas nada o puedes mostrar un mensaje de cancelación
            console.log('Eliminación cancelada por el usuario');
          }
        } else {
          alert('No puedes eliminar esta publicación');
        }
      });
      // ----------MODAL EDITAR COMENTARIO----------
      const closeModalButton = document.createElement('button');
      closeModalButton.textContent = 'x';
      closeModalButton.setAttribute('class', 'close-modal');
      const editModal = document.createElement('div');
      editModal.classList.add('modal');
      const uploadTextEdit = document.createElement('div');
      uploadTextEdit.setAttribute('class', 'upload');
      uploadTextEdit.textContent = 'Editar publicación';
      const contentModalEdit = document.createElement('div');
      contentModalEdit.setAttribute('class', 'content-modal');
      const editPostContent = document.createElement('input');
      editPostContent.setAttribute('type', 'text');
      editPostContent.setAttribute('class', 'text-input');
      const saveEditButton = document.createElement('button');
      saveEditButton.textContent = 'Guardar';
      saveEditButton.setAttribute('class', 'save-modal');
      // Abre el modal cuando se hace clic en el botón "Editar Publicación"
      buttonEdit.addEventListener('click', () => {
        const currentContent = doc.data().post;
        editModal.style.display = 'block';
        document.body.appendChild(editModal);
        editPostContent.value = currentContent;// Puedes establecer el contenido actual aquí
        console.log(editPostContent);
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
      postContainer.append(postUser, postNew, reaccion);
      postSection.append(postContainer);
      buttonLike.append(imgLike);
      buttonDelete.append(imgDelete);
      buttonEdit.append(imgEdit);
      contentModalEdit.append(uploadTextEdit, editPostContent, saveEditButton, closeModalButton);
      editModal.append(contentModalEdit);
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
  navigationBar.append(listNavigation);
  listNavigation.append(
    liHome,
    liUpload,
    liProfile,
    logoutButton,
  );

  containerDashbord.append(
    nameSocial,
    postSection,
    navigationBar,
  );

  return containerDashbord;
}
