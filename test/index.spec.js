/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */

// importamos la funcion que vamos a testear
import { signIn, registerUser } from '../src/lib/index.js';
import { register } from '../src/register.js';
// import * as firebase from '../src/lib/index.js';

describe('signIn', () => {
  it('Should be a function', () => {
    expect(typeof signIn).toBe('function');
  });
});

describe('register', () => {
  it('Should be a function', () => {
    expect(typeof signIn).toBe('function');
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
});

describe('registerUser', () => {
  it('Should be a function', () => {
    expect(typeof signIn).toBe('function');
  });
  it('After click button return call function navigateTo', () => {
    const DOM = document.createElement('section');
    const navegateTo = jest.fn();
    DOM.append(registerUser(navigateTo));
    const buttonBack = DOM.querySelector('#return');
    buttonBack.click();
    expect(navegateTo).toHaveBeenCalled();
  });
  it('After click button return call function navigateTo with /', () => {
    const DOM = document.createElement('section');
    const navigateTo = jest.fn();
    DOM.append(registerUser(navigateTo));
    const haveAbuttonReturn = DOM.querySelector('#return');
    haveAbuttonReturn.click();
    expect(navigateTo).toHaveBeenLastCalledWith('/');
  });
});
