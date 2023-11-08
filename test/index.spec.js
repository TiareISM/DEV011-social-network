/* eslint-disable no-undef */
// importamos la funcion que vamos a testear
import { signIn } from '../src/lib/index.js';
import { register } from '../src/register.js';

describe('signIn', () => {
  it('debería ser una función', () => {
    expect(typeof signIn).toBe('function');
  });
});
it('tiene un botón para crear cuenta', () => {
  const DOM = document.createElement('div');
  DOM.append(signIn());
  const haveCreateButton = DOM.querySelector('#login');
  expect(haveCreateButton).not.toBe(undefined);
});
it('cuando se hace click en el botón llama a la función navigateTo', () => {
  const DOM = document.createElement('div');
  DOM.append(renderLogin());
  const createAccountButton = DOM.querySelector('#account');
  createAccountButton.click();
});

describe('register', () => {
  it('debería ser una función', () => {
    expect(typeof signIn).toBe('function');
  });
  test('tiene un boton que retorna', () => {
    const DOM = document.createElement('div');
    DOM.append(register());
    const haveAButton = DOM.querySelector('#return');
    expect(haveAButton).not.toBe(undefined);
  });
  test('', () => {
    const DOM = document.createElement('div');
    const navegateTo = jest.fn();
    DOM.append(singup(navigateTo));
    const buttonBack = DOM.querySelector('#return');
    buttonBack.click();
    expect(navegateTo).toHaveBeenCalled();
  });
});
