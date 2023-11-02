// importamos la funcion que vamos a testear
import { signIn } from '../src/lib/index.js';
import { register } from '../src/register.js';

describe('signIn', () => {
  it('debería ser una función', () => {
    expect(typeof signIn).toBe('function');
  });
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
  test('', ()=> {
    const DOM = document.createElement('div');
    const navegateTo = jest.fn();
    DOM.append(singup(navigateTo));
    const buttonBack = DOM.querySelector('#return');
    buttonBack. click();
    expect(navegateTo).toHaveBeenCalled();
  });
});