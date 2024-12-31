import { numberTypes } from '../types/number';

export function numberReducer(state, action) {
  switch (action.type) {
    case numberTypes.NUMBER_ADD2:
      return { ...state, number: state.number + 2 };
    case numberTypes.NUMBER_7TIMES:
      return { ...state, number: state.number * 7 };
    case numberTypes.NUMBER_DIV25:
      return { ...state, number: state.number / 25 };
    case numberTypes.NUMBER_PARSE_INT:
      return { ...state, number: parseInt(state.number) };
    case numberTypes.NUMBER_ADD:
      return { ...state, number: state.number + action.payload };
    default:
      return state;
  }
}
