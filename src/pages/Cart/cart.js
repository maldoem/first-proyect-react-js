import { useContext, useState, useEffect } from "react";
import { cartContext } from "../../context/CartProvider";
import { collection, addDoc, getFirestore, doc, updateDoc } from 'firebase/firestore';
import moment from 'react';
import "./cart.css";

const Cart = () => {
  const { cart } = useContext(cartContext);
  const [total, setTotal] = useState(0);
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const getTotalPrice = () => {
    setTotal(
      cart.reduce((acc, product) => acc + product.precio * product.quantity, 0)
    );
  };
  const createOrder = () => {
    const db = getFirestore();
    const query = collection(db, 'order');
    const newOrder = {
      buyer: {
        name: formValues.name,
        phone: formValues.phone,
        email: formValues.email,
      },
      
      items: cart,
      total: total,
    };
    addDoc(query, newOrder)
      .then((res) => {
        alert(`Orden creada con el id ${res.id}`)
        return res 
      })
      .then((res) =>{
        cart.forEach((product) =>{
          const query = doc(db, 'itemsfb', product.id);
          updateDoc(query, {
            stock: product.stock - product.quantity,
          })
        })
        //const orderDoc = doc(db, 'itemsfb', res.id);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getTotalPrice();
  }, [cart]);

  const handlerInputChange = (event) => {
    console.log(event.target.value);
    setFormValues({
      ...formValues,
      [event.target.name] : event.target.value,
    })
  };
  return (
    <div className="cart">
      <div className="cartDet">
        {cart.map((product) => (
          <div key={product.id} className="producto">
            <div className="productoImg">
              <img
                src={`/images/${product.imagen}`}
                alt={product.nombre}
                className="imgCart"
              />
            </div>
            <div className="proddet">
              <h2>{product.nombre}</h2>
              <h2>${product.precio}</h2>
              <h2>cantidad {product.quantity}</h2>
              <h2>${product.precio * product.quantity}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="total">
        <h2> Total: ${total}</h2>
        <button onClick={createOrder}>crear orden</button>
        <div className="formulario">
          <h2>formulario</h2>
          <input name='name' type="text" placeholder="Nombre" value={formValues.name}
          onChange={handlerInputChange}/>
          <input name='phone' type="text" placeholder="Telefono" value={formValues.phone}
          onChange={handlerInputChange}/>
          <input name='email' type="text" placeholder="Email" value={formValues.email} onChange={handlerInputChange}/>
        </div>
      </div>
    </div>
  );
};

export default Cart;
