import { useEffect, useState, useContext } from "react";
import { cartContext } from "../../context/CartProvider";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ prodSelect }) => {
  const [count, setCount] = useState(0);
  const { cart, addToCart } = useContext(cartContext);
  useEffect(() => {}, [prodSelect]);
  console.log(cart)
  return (
    <div className="detdad">
      <div className="detalles">
        <h1>{prodSelect[0].nombre}</h1>
        <img
          src={`/images/${prodSelect[0].imagen}.jpg`}
          alt={prodSelect[0].nombre}
        />
        <p>{prodSelect[0].descripcion}</p>
        <p>${prodSelect[0].precio}</p>
        <ItemCount setCount={setCount} count={count} />
        <div>
          <button onClick={() => addToCart(prodSelect[0], count)}>
            agregar al carrito
          </button>
          <p>wwwwwwwwwwwww{cart.length}</p>
        </div>
        
      </div>
      
    </div>
  );
};

export default ItemDetail;
