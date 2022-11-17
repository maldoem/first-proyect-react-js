import {useState} from "react";
import "./State.css"


const state = () => {

  const [contador, setContador] = useState(0);
  const add = () => {
    setContador(contador +1);
  };
  const less = () => {
    if(contador ===0){
      return;
    }
    setContador(contador -1);
  };

  return (
    <div className="box-counter">
      <div className="counter">
        <button onClick={add}>+</button>
        <h2>{contador}</h2>
        <button onClick={less}>-</button>
      </div>
      <div>
        <button >agregar al carrito</button>
      </div>
    </div>
  );
};

export default state;