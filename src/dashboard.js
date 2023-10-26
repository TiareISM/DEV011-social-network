import { addPost, paintRealTime } from "./lib";

export function dashboard(navigateTo) {
  // ----- contenedor del nombre red social -----
  const containerDashbord = document.createElement("section");
  const nameSocialContainer = document.createElement("header");
  nameSocialContainer.setAttribute("class", "name-social-container");
  const img = document.createElement("img");
  img.setAttribute("class", "logo");
  const nameSocial = document.createElement("h1");
  nameSocial.setAttribute("class", "nameSocial");
  const welcomeUser = document.createElement("p");
  welcomeUser.setAttribute("class", "welcome-user");
  //----- contenedor filtros-----
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
  //----- contenedor publicaciones----
  const wallContainer = document.createElement("section");
  wallContainer.setAttribute("class", "wall-container");
  const wallPost = document.createElement("section");
  wallPost.setAttribute("class", "wall-post");
  const publication = document.createElement("div");
  publication.setAttribute("class", "publicación");
  const photoPost = document.createElement("input");
  photoPost.setAttribute("type", "file");
  photoPost.setAttribute("accept", "image/*");
  photoPost.setAttribute("class", "foto");
  //-----reacciones a foto-----
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
  //const writtenComment = document.createElement("textarea");
  //writtenComment.setAttribute("class", "escribe-comentario");
  const buttonSend = document.createElement("button");
  buttonSend.setAttribute("class", "enviar-comentario");
  buttonSend.setAttribute("id","buttonSend");
  const postSection = document.createElement("article");
  postSection.setAttribute("class", "post");
  postSection.setAttribute("id","post-section");
  const navigationBar = document.createElement("footer");
  navigationBar.setAttribute("class", "navigation-bar");
  const listNavigation = document.createElement("ul");
  listNavigation.setAttribute("class", "list-navigation");
  const liSearch = document.createElement("li");
  liSearch.setAttribute("class", "navigation-bar");
  const liHome = document.createElement("li");
  liHome.setAttribute("class", "li-home");
  const liUpload = document.createElement("li");
  liUpload.setAttribute("class", "li-upload");
  const liProfile = document.createElement("li");
  liProfile.setAttribute("class", "li-profile");

  img.src = "imagen/LogoEnRutados.png";
  nameSocial.textContent = "EnRutados";
  buttonSend.textContent = "Publicar";

  
  filterContainer.append(ulFilter, filterTransport, filterHostal, filterRestaurant);
  nameSocialContainer.append(img, nameSocial, filterContainer);
  wallSection.append(sendComment, buttonSend, postSection);

  wallSection.querySelector("#buttonSend").addEventListener("click", () => {
    const comment = wallSection.querySelector("#sendComment");
    addPost(comment.value);
    comment.value = "";
  });
  paintRealTime((querySnapshot) => {
    postSection.textContent = " ";
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      const post = document.createElement("input");
      post.value = doc.data().comment;
      postSection.append(post);
    });
  });
  
  wallContainer.append(
    wallPost,
    publication,
    photoPost,
    reactionToPhoto,
    buttonLike,
    buttonComment
  );
  navigationBar.append(listNavigation, liSearch, liHome, liUpload, liProfile);
  containerDashbord.append(nameSocialContainer, wallContainer, wallSection, navigationBar);


  return containerDashbord;
}
