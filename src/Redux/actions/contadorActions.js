import {
  INCREMENT,
  INCREMENT2,
  DECREMENT,
  DECREMENT2,
  RESET,
  INCREMENTRANDOM,
  DECREMENTRANDOM,
} from "../types";

export const sumar = () => ({
  type: INCREMENT,
});

export const sumar2 = () => ({
  type: INCREMENT2,
  payload: 2,
});

export const sumarRandom = () => ({
  type: INCREMENTRANDOM,
  payload: Math.random() * 5,
});

export const restar = () => ({
  type: DECREMENT,
});

export const restar2 = () => ({
  type: DECREMENT2,
  payload: 2,
});

export const restarRandom = () => ({
  type: DECREMENTRANDOM,
  payload: Math.random() / 5,
});

export const resetear = () => ({
  type: RESET,
});
