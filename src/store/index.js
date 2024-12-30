import { reducer } from './reducers';

const initialState = {
  number: 0, // foco no exercicio é o number
  other: '...',
  cart: [],
  user: null,
  products: [],
};

export { reducer, initialState };
