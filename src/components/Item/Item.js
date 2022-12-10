import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ product }) => {
  return (
    <div className="products">
      <img src={`/images/${product.imagen}`} alt={product.nombre} />
      <h2 className="nombre">{product.nombre}</h2>
      
      <p className="price">${product.precio}</p>

      <Link to={`/item/${product.id}`}>
        <button> ver detalles</button>
      </Link>
    </div>
  );
};

export default Item;
