
import { data } from "../../data/data";
import { useState, useEffect } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  const getProducts = new Promise((res, rej) => {
    setTimeout(() => {
      if (categoryName) {
        const filteredData = data.filter((item) => {
          return item.category === categoryName;
        });
        res(filteredData);
      } else {
        res(data);
      }
    }, 1000);
  });
  useEffect(() => {
    getProducts
      .then((res) => setItems(res))
      .catch(error =>console.log(error));
  }, [categoryName]);

  return (
    <div >
      <div className="ilCont">
        <ItemList products={items} />
      </div>
    </div>
  );
};

export default ItemListContainer;
