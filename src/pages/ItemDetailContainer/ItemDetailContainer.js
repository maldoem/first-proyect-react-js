import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [prodSelect, setProdSelect] = useState();
  const { id } = useParams();

  const getProducts = () => {
    const db = getFirestore();
    const query = doc(db, "itemsfb", id);
    getDoc(query)
      .then((res) => {
        console.log(res.data());
        setProdSelect({ id: res.id, ...res.data() });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  }, [id]);
  return <div>
            {prodSelect && <ItemDetail prodSelect={prodSelect} />}
          </div>;
};

export default ItemDetailContainer;
