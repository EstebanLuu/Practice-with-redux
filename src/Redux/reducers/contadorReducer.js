import {
  DECREMENT,
  DECREMENT2,
  INCREMENT,
  INCREMENT2,
  RESET,
  DECREMENTRANDOM,
  INCREMENTRANDOM,
} from "../types";

const INITIAL_STATE = 0;

export default function contadorReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case INCREMENT2:
      return state + action.payload;
    case INCREMENTRANDOM:
      return state + action.payload;
    case DECREMENT2:
      return state - action.payload;
    case DECREMENTRANDOM:
      return state - action.payload;
    case RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
}
