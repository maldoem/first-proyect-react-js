import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { data } from "../../data/data";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
  const [prodSelect, setProdSelect] = useState([]);
  const { id } = useParams();

  const getProducts = () => {
    const prodFilter = data.filter((producto) => {
      return producto.id == id;
    });
    return prodFilter;
  };
  useEffect(() => {
    setProdSelect(getProducts)
    
  }, [id]);
  return (
    <div>
      {prodSelect.length == 1 ? <ItemDetail prodSelect={prodSelect} />:<></>}
    </div>
  );
};

export default ItemDetailContainer;
