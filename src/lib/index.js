/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  getDoc,
  doc,
  arrayRemove,
  arrayUnion,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {
  getStorage, ref, uploadBytes, getDownloadURL,
} from 'firebase/storage';

// -----Configuración de Firebase-----
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
export const db = getFirestore(app);
// Agrega la configuración de Firebase Auth
export const auth = getAuth(app);

// ----- Funcion de registro de Usuario -----
export const registerUser = (email, password, name) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // console.log(user);
      updateProfile(auth.currentUser, {
        displayName: name,
        userEmail: email,
      });
      window.location.hash = '/dashboard';
      // emailCheck();
    })
    .catch((error) => {
      // const errorCode = error.code;
      // console.log(errorCode);
      // const errorMessage = error.message;
      // console.log(errorMessage);
      console.error('error durante el registro', error);
    });
};

// -----Funcion de Ingreso con Google----
export const signGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // Inicio de sesión exitoso, puedes acceder a la información del usuario aquí.
      const user = result.user;
      console.log(user);
      return user;
      // console.log('Usuario autenticado:', user);
      // window.location.hash = '/dashboard';
    })
    .catch((error) => {
      // Manejo de errores en caso de que el inicio de sesión falle.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      console.error('Error de inicio de sesión:', error);
      return error;
    });
};

// -----Funcion de Inicio Sesión----
export const signIn = (email, password) => new Promise((resolve, reject) => {
  if (!email || !password) {
    const error = new Error('Campos vacíos');
    reject(error); // Rechaza la promesa si faltan los campos
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      resolve(user); // Resuelve la promesa con el usuario en caso de inicio de sesión exitoso
    })
    .catch((error) => {
      reject(error); // Rechaza la promesa si hay un error en el inicio de sesión
    });
});

// Función para agregar una publicación a Firebase
const storage = getStorage();
const postCollections = collection(db, 'post');

// Función para agregar una publicación a Firebase con el URL de la imagen
export const addPost2 = (title, imageFile, description) => {
  const user = auth.currentUser;
  const userEmail = user.email;

  // Subir el archivo a Firebase Storage
  const storageRef = ref(storage, `publicaciones/${imageFile.name}`);
  const uploadTask = uploadBytes(storageRef, imageFile);

  // Subir el archivo y guardar la publicación con la URL de descarga
  uploadTask.then((snapshot) => {
    getDownloadURL(snapshot.ref).then((downloadURL) => {
      addDoc(postCollections, {
        title,
        image: downloadURL,
        description,
        email: userEmail,
      }).then(() => {
        console.log('Publicación agregada con la URL de la imagen');
      }).catch((error) => {
        console.error('Error al agregar la publicación:', error);
      });
    }).catch((error) => {
      console.error('Error al obtener la URL de descarga:', error);
    });
  }).catch((error) => {
    console.error('Error al subir el archivo al almacenamiento:', error);
  });
};

// -----Agregar Publicación-----
const postCollection = collection(db, 'posts');
export const addPost = (post, email) => {
  addDoc(postCollection, {
    post,
    counterLikes: [],
    email,
  });
};
export const querySnapshot = getDocs(postCollection, postCollections);
export const paintRealTime = (callback) => onSnapshot(postCollection, callback);
export const paintReal = (callback) => onSnapshot(postCollections, callback);

// -----Función para cerrar sesión-----
export const logout = () => {
  auth.signOut().then(() => {
    // Limpiar los datos del usuario al cerrar sesión
    auth.currentUser = null;
    // Redirigir a la página principal o a la de inicio de sesión
    window.location.href = '/'; // Redirige a la página de inicio de sesión
  }).catch((error) => {
    console.error('Error al cerrar sesión:', error);
    // En caso de error, redirige a la página principal
    window.location.href = '/';
  });
};
// -----Función para Dar like-----

export const giveLike = (postId, idUser) => {
  updateDoc(doc(db, 'posts', postId), {
    counterLikes: arrayUnion(idUser),
  });
  console.log('like dado exitosamente:');
};

export const unGiveLike = (postId, idUser) => {
  updateDoc(doc(db, 'posts', postId), {
    counterLikes: arrayRemove(idUser),
  });
};

// Borrar datos
export const deletePost = (postId) => {
  deleteDoc(doc(db, 'posts', postId));
  console.log(deleteDoc);
};

// Función para editar una publicación
export const editPost = (postId, newPostContent) => {
  const postRef = doc(db, 'posts', postId); // Referencia al documento específico en la colección 'posts'

  try {
    updateDoc(postRef, {
      post: newPostContent, // Actualiza el campo 'post' con el nuevo contenido
    });
    console.log('Publicación editada correctamente.');
  } catch (error) {
    console.error('Error al editar la publicación:', error);
  }
};
