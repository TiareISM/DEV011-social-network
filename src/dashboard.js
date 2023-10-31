import { addComment, addPost, logout, paintRealTime, paintReal} from "./lib";

export function dashboard() {
  // ----- contenedor del nombre red social -----
  const containerDashbord = document.createElement('section');
  const nameSocialContainer = document.createElement("header");
  nameSocialContainer.setAttribute("class", "name-social-container");
  const img = document.createElement("img");
  img.setAttribute("class", "logo");
  const nameSocial = document.createElement("h1");
  nameSocial.setAttribute("class", "nameSocial");
  const welcomeUser = document.createElement("p");
  welcomeUser.setAttribute("class", "welcome-user");
  // ----- contenedor filtros-----
  const filterContainer = document.createElement("nav");
  filterContainer.setAttribute("class", "filter-container");
  const ulFilter = document.createElement("ul");
  ulFilter.setAttribute("class", "ul-filter");
  const filterTransport = document.createElement("li");
  filterTransport.setAttribute("class", "filter-wall");
  filterTransport.setAttribute("id", "filter-transport");
  const filterHostal = document.createElement("li");
  filterHostal.setAttribute("class", "filter-hostal");
  filterHostal.setAttribute("id", "filter-hostal");
  const filterRestaurant = document.createElement("li");
  filterRestaurant.setAttribute("class", "filter-wall");
  filterRestaurant.setAttribute("id", "filter-restaurant");
  // ----- contenedor publicaciones----
  const wallContainer = document.createElement("section");
  wallContainer.setAttribute("class", "wall-container");
  const wallPost = document.createElement("section");
  
  // -----reacciones a foto-----
  const reactionToPhoto = document.createElement("section");
  reactionToPhoto.setAttribute("class", "acciones");
  const buttonLike = document.createElement("button");
  buttonLike.setAttribute("class", "like");
  const buttonComment = document.createElement("button");
  buttonComment.setAttribute("class", "comment");
  const wallSection = document.createElement("section");
  const sendComment = document.createElement("input");
  sendComment.setAttribute("class", "comentario");
  sendComment.setAttribute("id", "sendComment");
  const buttonSend = document.createElement("button");
  buttonSend.setAttribute("class", "enviar-comentario");
  buttonSend.setAttribute("id", "buttonSend");
  const postSection = document.createElement("article");
  postSection.setAttribute("class", "post");
  postSection.setAttribute("id", "post-section");
  const navigationBar = document.createElement("footer");
  navigationBar.setAttribute("class", "navigation-bar");
  const listNavigation = document.createElement("ul");
  listNavigation.setAttribute("class", "list-navigation");
  const liSearch = document.createElement("li");
  liSearch.setAttribute("class", "li-search");
  liSearch.textContent = "Búsqueda";
  const liHome = document.createElement("li");
  liHome.setAttribute("class", "li-home");
  liHome.textContent = "Inicio";
  const liUpload = document.createElement("li");
  liUpload.textContent = "Subir";
  // -----Para subir publicaciones-----
  const form = document.createElement('form');
  form.setAttribute('id', 'postForm');
  const titleLabel = document.createElement('label');
  titleLabel.setAttribute('for', 'post-title');
  titleLabel.textContent = 'Título:';
  const titleInput = document.createElement('input');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('id', 'post-title');
  titleInput.setAttribute('required', 'true');
  const descriptionLabel = document.createElement('label');
  descriptionLabel.setAttribute('for', 'post-content');
  descriptionLabel.textContent = 'Descripción:';
  const descriptionTextarea = document.createElement('textarea');
  descriptionTextarea.setAttribute('id', 'post-content');
  descriptionTextarea.setAttribute('required', 'true');
  descriptionTextarea.setAttribute('placeholder', 'Escribe tu comentario <3'); 
  const imageLabel = document.createElement('label');
  imageLabel.setAttribute('for', 'post-image');
  imageLabel.textContent = 'Imagen:';
  const imageInput = document.createElement('input');
  imageInput.setAttribute('type', 'file');
  imageInput.setAttribute('id', 'postFile');
  imageInput.setAttribute('accept', 'image/*');
  imageInput.setAttribute('required', 'true');
  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.textContent = 'Publicar';
  liUpload.setAttribute("class", "li-upload");
  const liProfile = document.createElement("li");
  liProfile.setAttribute("class", "li-profile");
  liProfile.textContent = "Perfil";
  // Botón para cerrar sesión
  const logoutButton = document.createElement("button");
  logoutButton.setAttribute("class", "logout-button");
  logoutButton.textContent = "Cerrar Sesión";

//para modal de form
  liUpload.addEventListener('click', () => {
    // Crear un div para el modal
    const modal = document.createElement('div');
    modal.classList.add('modal');
    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(descriptionLabel);
    form.appendChild(descriptionTextarea);
    form.appendChild(imageLabel);
    form.appendChild(imageInput);
    form.appendChild(submitButton);
    // Agregar el formulario al modal
    modal.appendChild(form);
    
    // Mostrar el modal en la página
    document.body.appendChild(modal);  
    // Escuchar evento de envío del formulario
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const title = form.querySelector('#post-title').value;
      const imageFile = form.querySelector('#postFile').files[0]; // Obtener la imagen seleccionada
      const description = form.querySelector('#post-content').value;
      
  
      // Llamar a la función para agregar publicación y subir imagen a Firebase
      addPost(title, imageFile, description);
  
      // Cerrar el modal después de enviar la publicación
      modal.style.display = 'none';
    });
  });


  // Función para el botón
  logoutButton.addEventListener("click", () => {
    logout();
  });

  img.src = "imagen/LogoEnRutados.png";
  nameSocial.textContent = "EnRutados";
  buttonSend.textContent = "Publicar";
  

  filterContainer.append(
    ulFilter,
    filterTransport,
    filterHostal,
    filterRestaurant
  );
  nameSocialContainer.append(img, nameSocial, filterContainer);
  wallSection.append(sendComment, buttonSend, postSection);

  wallSection.querySelector("#buttonSend").addEventListener("click", () => {
    const comment = wallSection.querySelector("#sendComment");
    addComment(comment.value);
    comment.value = "";
  });
  paintRealTime((querySnapshot) => {
    postSection.textContent = " ";
    querySnapshot.forEach((doc) => {
      const post = document.createElement('input');
      post.value = doc.data().comment;
      postSection.append(post);
    });
  });
  paintReal((querySnapshot) => {
    wallPost.innerHTML = ''; // Limpiar el contenido anterior antes de agregar los nuevos datos
    querySnapshot.forEach((doc) => {
        const postData = doc.data();
        const postElement = document.createElement('div');
        postElement.innerHTML = `
            <h3>${postData.title}</h3>
            <p>${postData.description}</p>
            <img src="${postData.image}" alt="Publicación">
        `;
        wallPost.appendChild(postElement);
    });
});
  wallContainer.append(
    wallPost,
    reactionToPhoto,
    buttonLike,
    buttonComment
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
    wallSection,
    navigationBar,
    logoutButton,
  );

  return containerDashbord;
}
