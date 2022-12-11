import { useState, useContext } from "react";
import { cartContext } from "../../context/CartProvider";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ prodSelect }) => {
  const [count, setCount] = useState(1);
  const { cart, addToCart } = useContext(cartContext);

  console.log(cart);
  return (
    <div className="detdad">
      <div className="detalles">
        <h1>{prodSelect.nombre}</h1>
        <img src={`/images/${prodSelect.imagen}`} alt={prodSelect.nombre} />
        <p>{prodSelect.descripcion}</p>
        <p>${prodSelect.precio}</p>
        <p>stock {prodSelect.stock}</p>
        <ItemCount setCount={setCount} count={count} />
        <div className="addButton">
          <button onClick={() => addToCart(prodSelect, count)}>
            agregar al carrito
          </button>
          <p>wwwwwwwwwwwww{cart.length}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
