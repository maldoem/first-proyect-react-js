import { Link } from "react-router-dom";
// import State from "../State/State";
import "./Item.css"

const Item = ({ product }) => {
  return (
    
      <div className="products">
        <h2 className="nombre">{product.nombre}</h2>
        <img src={`images/${product.imagen}.jpg`} alt={product.nombre}/>
        <p className="price">${product.precio}</p>
        
        <Link to={`/item/${product.id}`}>
          <button> ver detalles</button>
        </Link>  
      </div>
    
  );
};

export default Item;
