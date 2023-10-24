export function dashboard(navigateTo) {
  // ----- contenedor del nombre red social -----
  const containerDashbord = document.createElement("div")
  const nameSocialContainer = document.createElement("header");
  nameSocialContainer.setAttribute("class", "name-social-container");
  const img = document.createElement("img");
  img.setAttribute("class", "logo");
  const nameSocial = document.createElement("h1");
  nameSocial.setAttribute("class", "nameSocial");
  const welcomeUser = document.createElement("p")
  welcomeUser.setAttribute("class", "welcome-user");
 //----- contenedor filtros-----
  const filterContainer = document.createElement("nav");
  filterContainer.setAttribute("class", "filter-container");
  const filterTransport = document.createElement("section");
  filterTransport.setAttribute("class", "filter-wall");
  filterTransport.setAttribute("id", "filter-transport");
  const filterHostal = document.createElement("section");
  filterHostal.setAttribute("class", "filter-wall");
  filterHostal.setAttribute("id", "filter-hostal");
  const filterRestaurant = document.createElement("section");
  filterRestaurant.setAttribute("class", "filter-wall");
  filterRestaurant.setAttribute("id", "filter-restaurant");
  //----- contenedor publicaciones----
  const wallContainer = document.createElement("main");
  wallContainer.setAttribute("class", "main");
  const wallPost = document.createElement("section");
  wallPost.setAttribute("class", "wall-post");
  const publication = document.createElement("div");
  publication.setAttribute("class", "publicación");
  const photoPost = document.createElement("input");
  photoPost.setAttribute("type", "file");
  photoPost.setAttribute("accept", "image/*");
  photoPost.setAttribute("class", "foto");
  //-----reacciones a foto-----
  const reactionToPhoto = document.createElement("div");
  reactionToPhoto.setAttribute("class", "acciones");
  const buttonLike = document.createElement("button");
  buttonLike.setAttribute("class", "like");
  const buttonComment = document.createElement("button");
  buttonComment.setAttribute("class", "comment");
  const sendComment = document.createElement("div");
  sendComment.setAttribute("class", "comentario");
  const writtenComment = document.createElement("textarea");
  writtenComment.setAttribute("class", "escribe-comentario");
  const buttonSend = document.createElement("button");
  buttonSend.setAttribute("class", "enviar-comentario");

  img.src = "imagen/LogoEnRutados.png";
  nameSocial.textContent = "EnRutados";
  

  filterContainer.append(filterTransport, filterHostal, filterRestaurant);
  nameSocialContainer.append(img, nameSocial, filterContainer);
  wallContainer.append(wallPost, publication, photoPost, reactionToPhoto, buttonLike, buttonComment, writtenComment, buttonSend);
  containerDashbord.append(nameSocialContainer, wallContainer)

  return containerDashbord;
}

/*
  // Agrega un evento de cambio para el campo de entrada de archivo
  photoPost.addEventListener("change", (event) => {
    const selectedFile = event.target.files[0]; // Obtiene el archivo seleccionado
    // Realiza las operaciones necesarias con el archivo seleccionado, como mostrar una vista previa o cargarlo a un servidor.
    // Por ejemplo, para mostrar una vista previa de la imagen seleccionada:

    const imagePreview = document.createElement("img");
    imagePreview.setAttribute("src", URL.createObjectURL(selectedFile)); // Muestra una vista previa de la imagen
    // Agrega la vista previa al formulario o a donde quieras mostrarla
    const form = document.querySelector("#tuFormulario"); // Reemplaza '#tuFormulario' con el selector de tu formulario
    form.appendChild(imagePreview);
  });

  // Agrega el campo de entrada de archivo al formulario o donde desees
  const form = document.querySelector("#tuFormulario"); // Reemplaza '#tuFormulario' con el selector de tu formulario
  form.appendChild(fileInput);
  
//----- contenedor publicaciones----
const containerWallPost = document.createElement();
const wallPost = `
    <header class='header-wall'>
            <img class='logo' src='/imagen/LogoEnRutados.png' />
            <h1>EnRutados</h1>
            <nav>
                <section class='filter-wall' id='filter-transport'>Tansporte</section>
                <section class='filter-wall' id='filter-hostal'>Alojamiento</section>
                <section class='filter-wall' id='filter-restaurant'>Restaurante</section>
            </nav>
        </header><main>
                <section>
                <div class="publicacion">
                     <div class="foto">
                        <img src="ruta_de_la_imagen.jpg" alt="Foto de la publicación"> </div>
                         <div class="comentario"> 
                         <textarea placeholder="Escribe tu comentario..."></textarea> 
                         </div>
                          <div class="acciones">
                             <button class="like">Like</button> 
                             <button class="emoticon">😄</button>
                              </div> 
                              <div class="opciones"> 
                              <label for="transporte">Transporte</label>
                               <input type="radio" id="transporte" name="tipo" value="transporte">
                                 <label for="alojamiento">Alojamiento</label>
                                  <input type="radio" id="alojamiento" name="tipo" value="alojamiento"> 
                                  <label for="comidas">Comidas</label> 
                                  <input type="radio" id="comidas" name="tipo" value="comidas"> 
                                  </div>
                                   </div>
                </section>
            </main>
            `;
containerWallPost.innerHTML = wallPost;
 return containerWallPost;
}*/
