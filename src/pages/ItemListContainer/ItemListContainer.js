import { useState, useEffect } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, "itemsfb");
    if (categoryName) {
      const queryFilter = query(
        querySnapshot,
        where('category', '==', categoryName)
      );
      getDocs(queryFilter)
        .then((res) => {
          const data = res.docs.map((item) => {
            console.log(item.data());
            console.log(item.id);
            return { id: item.id, ...item.data() };
          });
          console.log(data);
          setItems(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      getDocs(querySnapshot)
        .then((res) => {
          const data = res.docs.map((item) => {
            console.log(item.data());
            console.log(item.id);
            return { id: item.id, ...item.data() };
          });
          console.log(data);
          setItems(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  useEffect(() => {
    getProducts();
  }, [categoryName]);
  //const getProducts = new Promise((res, rej) => {
  //setTimeout(() => {
  //   if (categoryName) {
  //     const filteredData = data.filter((item) => {
  //       return item.category === categoryName;
  //     });
  //     res(filteredData);
  //   } else {
  //     res(data);
  //   }
  // }, 1000);
  //});
  // useEffect(() => {
  //   getProducts
  //     .then((res) => setItems(res))
  //     .catch(error =>console.log(error));
  // }, [categoryName]);

  return (
    <div>
      <div className="ilCont">
        <ItemList products={items} />
      </div>
    </div>
  );
};

export default ItemListContainer;
