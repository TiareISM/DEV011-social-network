// aqui exportaras las funciones que necesites

/*export const myFunction = () => {
  // aqui tu codigo
 // console.log('Hola mundo!');
};
// Funcion para registrarte
export const signUp = (email, password, name) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      updateProfile(auth.currentUser, {
        displayName: name,
        userEmail: email,
      });
      alert('Usuario Registrado');
      window.location.hash = '#/login';
      emailCheck();
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      alert('Correo ya registrado');
      // ..
    });//