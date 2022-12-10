import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
//import { data } from "../../data/data";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [prodSelect, setProdSelect] = useState([]);
  const { id } = useParams();

  const getProducts = () => {
    const db = getFirestore()
    const query = doc(db, 'itemsfb', id)
    getDoc(query)
    .then(res =>{
      console.log(res.data())
      //return {id: res.id, ...res.data()}
    })
    .catch(error => console.log(error))
    // const prodFilter = data.filter((producto) => {
    //   return producto.id == id;
    // });
    // console.log(prodFilter);
    //return prodFilter;
  };
  useEffect(() => {
    //setProdSelect(getProducts);
    getProducts()
  }, [id]);
  return (
    <div>
      {prodSelect.length == 1 ? <ItemDetail prodSelect={prodSelect} /> : <></>}
    </div>
  );
};

export default ItemDetailContainer;
