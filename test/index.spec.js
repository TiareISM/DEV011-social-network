/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */

// importamos la funcion que vamos a testear
import { signIn, registerUser } from '../src/lib/index.js';
import { register } from '../src/register.js';
import login from '../src/login.js';
import { dashboard } from '../src/dashboard.js';
import * as index from '../src/lib/index.js';
import { home } from '../src/home.js';

// -----test funcionalidad  register-----
describe('register', () => {
  it('Should be a function', () => {
    expect(typeof register).toBe('function');
  });
  it('Have a button to return', () => {
    const DOM = document.createElement('section');
    DOM.append(register());
    const haveAButton = DOM.querySelector('#return');
    expect(haveAButton).not.toBe(undefined);
  });
  it('Snapshot of register', () => {
    const DOM = document.createElement('section');
    DOM.append(register());
    expect(DOM).toMatchSnapshot();
  });
  it('Have a button to register with Google', () => {
    const DOM = document.createElement('section');
    DOM.append(register());
    const haveAbuttonGoogle = DOM.querySelector('.openGoogle');
    expect(haveAbuttonGoogle).not.toBe(undefined);
  });
  it('After click button register call function navigateTo with /dashboard', () => {
    const DOM = document.createElement('section');
    document.body.appendChild(DOM);
    const navigateTo = jest.fn();
    DOM.append(register(navigateTo));
    jest.spyOn(index, 'registerUser').mockImplementation(() => Promise.resolve({}));
    const haveAbuttonRegister = DOM.querySelector('.buttonInfo');
    const email = DOM.querySelector('#idInputEmail');
    const password = DOM.querySelector('#idInputPass');
    const name = DOM.querySelector('#idInputName');
    email.value = 'hola@enrutados.com';
    password.value = '123456';
    name.value = 'Labo';
    haveAbuttonRegister.click();
    expect(navigateTo).toHaveBeenLastCalledWith('/dashboard');
  });
});
// -----Test registro de usuario con Spy.Mock-----
describe('have a button signUp to register the user', () => {
  it('test of click button register', () => {
    const DOM = document.createElement('section');
    document.body.appendChild(DOM);
    DOM.append(register());
    jest.spyOn(index, 'registerUser').mockImplementation(() => Promise.resolve({
      message: 'success',
      email: 'hola@enrutados.com',
    }));

    const buttonRegister = DOM.querySelector('.buttonInfo');
    const email = DOM.querySelector('#idInputEmail');
    email.value = 'hola@enrutados.com';
    const password = DOM.querySelector('#idInputPass');
    password.value = '123456';
    buttonRegister.click();
    expect(index.registerUser).toHaveBeenCalledTimes(4);
    // loginSpy.mockRestore();
  });
});

// -----test ruteo funcion registerUser-----//
describe('registerUser', () => {
  it('Should be a function', () => {
    expect(typeof registerUser).toBe('function');
  });
  /* it('After click button register call function navigateTo with /dashboard', () => {
    const DOM = document.createElement('section');
    const navigateTo = jest.fn();
    DOM.append(registerUser(navigateTo));
    const haveAbuttonRegister = DOM.querySelector('.buttonInfo');
    haveAbuttonRegister.click();
    expect(navigateTo).toHaveBeenLastCalledWith('/dashboard');
  }); */
});
// -----test funcionalidad  login-----
describe('login', () => {
  it('Should be a function', () => {
    expect(typeof login).toBe('function');
  });
  it('Have a button to return', () => {
    const DOM = document.createElement('section');
    DOM.append(login());
    const haveAButton = DOM.querySelector('.return');
    expect(haveAButton).not.toBe(undefined);
  });
  it('Snapshot of login', () => {
    const DOM = document.createElement('section');
    DOM.append(login());
    expect(DOM).toMatchSnapshot();
  });
  it('After click button return call function navigateTo with /', () => {
    const DOM = document.createElement('section');
    const navigateTo = jest.fn();
    DOM.append(login(navigateTo));
    const haveAbuttonReturn = DOM.querySelector('.return');
    haveAbuttonReturn.click();
    expect(navigateTo).toHaveBeenLastCalledWith('/');
  });
  it('Have a button to login with Google', () => {
    const DOM = document.createElement('section');
    DOM.append(login());
    const haveAbuttonGoogle = DOM.querySelector('.openGoogle');
    expect(haveAbuttonGoogle).not.toBe(undefined);
  });
});
describe('signIn', () => {
  it('Should be a function', () => {
    expect(typeof signIn).toBe('function');
  });
});

// ----- test post -----
describe('dashboard', () => {
  it('Should be a function', () => {
    expect(typeof dashboard).toBe('function');
  });
  it('Have a button to log out', () => {
    const DOM = document.createElement('section');
    document.body.appendChild(DOM);
    DOM.append(dashboard());
    const haveAbutton = DOM.querySelector('.logout-button');
    expect(haveAbutton).not.toBe(undefined);
  });
  it('Have a container to posts', () => {
    const DOM = document.createElement('section');
    DOM.append(dashboard());
    const containerPosts = DOM.querySelector('#post-section');
    expect(containerPosts).not.toBe(undefined);
  });
  it('Have a form to public post', () => {
    const DOM = document.createElement('section');
    DOM.append(dashboard());
    const createPosts = DOM.querySelector('#postForm');
    expect(createPosts).not.toBe(undefined);
  });
  it('Post have a button to delete', () => {
    const DOM = document.createElement('section');
    DOM.append(dashboard());
    const buttonDelete = DOM.querySelector('#delete');
    expect(buttonDelete).not.toBe(undefined);
  });
  it('Post have a button to edit', () => {
    const DOM = document.createElement('div');
    document.body.append(DOM);
    DOM.append(dashboard());
    const buttonEdit = DOM.querySelector('#edit');
    expect(buttonEdit).not.toBe(undefined);
  });
});
// ----- Funcionalidad de Home -----
describe('home', () => {
  it('Should be a function', () => {
    expect(typeof home).toBe('function');
  });
  it('After click button signIn call function navigateTo with /login', () => {
    const DOM = document.createElement('section');
    const navigateTo = jest.fn();
    DOM.append(home(navigateTo));
    const haveAbuttonSignIn = DOM.querySelector('.signIn');
    haveAbuttonSignIn.click();
    expect(navigateTo).toHaveBeenLastCalledWith('/login');
  });

  it('After click button signUp call function navigateTo with /register', () => {
    const DOM = document.createElement('section');
    const navigateTo = jest.fn();
    DOM.append(home(navigateTo));
    const haveAbuttonSignUp = DOM.querySelector('.signUp');
    haveAbuttonSignUp.click();
    expect(navigateTo).toHaveBeenLastCalledWith('/register');
  });
  it('Snapshot of home', () => {
    const DOM = document.createElement('section');
    DOM.append(home());
    expect(DOM).toMatchSnapshot();
  });
});
