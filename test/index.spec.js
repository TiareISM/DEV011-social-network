/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */

// importamos la funcion que vamos a testear
import { signIn, registerUser } from '../src/lib/index.js';
import { register } from '../src/register.js';
import login from '../src/login.js';
import { dashboard } from '../src/dashboard.js';
import * as firebase from '../src/lib/index.js';

describe('signIn', () => {
  it('Should be a function', () => {
    expect(typeof signIn).toBe('function');
  });
});
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
  it('After click button return call function navigateTo with /', () => {
    const DOM = document.createElement('section');
    const navigateTo = jest.fn();
    DOM.append(register(navigateTo));
    const haveAbuttonReturn = DOM.querySelector('#return');
    haveAbuttonReturn.click();
    expect(navigateTo).toHaveBeenLastCalledWith('/');
  });
  it('Have a button to register with Google', () => {
    const DOM = document.createElement('section');
    DOM.append(register());
    const haveAbuttonGoogle = DOM.querySelector('.openGoogle');
    expect(haveAbuttonGoogle).not.toBe(undefined);
  });
});
// -----test ruteo funcion registerUser-----//
describe('registerUser', () => {
  it('Should be a function', () => {
    expect(typeof registerUser).toBe('function');
  });
  it('After click button register call function navigateTo with /dashboard', () => {
    const DOM = document.createElement('section');
    const navigateTo = jest.fn();
    DOM.append(register(navigateTo));
    const haveAbuttonRegister = DOM.querySelector('.buttonInfo');
    haveAbuttonRegister.click();
    expect(navigateTo).toHaveBeenLastCalledWith('/dashboard');
  });
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
