import firebase from 'firebase/compat/app';
// Required for side-effects
import 'firebase/firestore';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

/* import { myFunction } from './lib/index.js';
myFunction(); */

import { home } from './home.js';
import login from './login.js';
import error from './error.js';
import register from './register.js';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
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
const auth = getAuth();

const routes = [
  { path: '/', component: home },
  { path: '/login', component: login },
  { path: '/error', component: error },
  { path: '/register', component: register },

];

const defaultRoute = '/';
const root = document.getElementById('root');

function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);
  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );

    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo));
  } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);
