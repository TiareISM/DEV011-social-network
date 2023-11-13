import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection } from "firebase/firestore"; 
import {getAuth, createUserWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

//-----Configuración de Firebase-----
const firebaseConfig = {
  apiKey: 'AIzaSyCjGsgPgUBt6lk3jxRAuYbyG4DGVxcdesY',
  authDomain: 'enrutados-da685.firebaseapp.com',
  databaseURL: 'https://enrutados-da685.firebaseio.com',
  projectId: 'enrutados-da685',
  storageBucket: 'enrutados-da685.appspot.com',
  messagingSenderId: '50191944291',
  appId: '1:50191944291:web:85693ee8aa28735369c656',
  measurementId: 'G-TT84JFJXC9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Agrega la configuración de Firebase Auth
export const auth = getAuth(app);


//----- Funcion de registro de Usuario -----
export const registerUser = (email, password, name) => {
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
    });
}

//----- Función agregar datos-----
/*export const registerUserdb = (

  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: "name",
      email: "email",
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
)*/

//-----Funcion de Ingreso con Google----
export const signGoogle = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // Inicio de sesión exitoso, puedes acceder a la información del usuario aquí.
      const user = result.user;
      console.log('Usuario autenticado:', user);
    })
    .catch((error) => {
      // Manejo de errores en caso de que el inicio de sesión falle.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error de inicio de sesión:', errorCode);
    });
  }
