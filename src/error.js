// file error.js
function error() {
    const title = document.createElement('h2');
    title.textContent = 'Error 404 page no found, please go home';
    console.log("soy la vista del error");
    return title;
  }
  
  export default error;