import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  resetear,
  restar,
  restar2,
  sumar,
  sumar2,
  sumarRandom,
  restarRandom,
} from "../Redux/actions";

const Contador = () => {
  const state = useSelector((state) => state.contador);
  const dispatch = useDispatch();

  const sumarDispatch = () => {
    dispatch(sumar());
  };
  const sumar2Dispatch = () => {
    dispatch(sumar2());
  };
  const restarDispatch = () => {
    dispatch(restar());
  };
  const restar2Dispatch = () => {
    dispatch(restar2());
  };
  const resetDispatch = () => {
    dispatch(resetear());
  };

  const sumarRamdomDispatch = () => {
    dispatch(sumarRandom());
  };

  const restarRandomDispatch = () => {
    dispatch(restarRandom());
  };

  return (
    <div>
      <h3>Contador</h3>
      <div className="contador__container">
        <button onClick={sumarDispatch}>+1</button>
        <button onClick={sumar2Dispatch}>+2</button>
        <button onClick={sumarRamdomDispatch}>+Random</button>
        <button>{state}</button>
        <button onClick={restarDispatch}>-1</button>
        <button onClick={restar2Dispatch}>-2</button>
        <button onClick={restarRandomDispatch}>-Random</button>
      </div>
      <button onClick={resetDispatch}>RESET</button>
    </div>
  );
};

export default Contador;
