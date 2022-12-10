import { useContext, useState, useEffect } from 'react'
import { cartContext } from '../../context/CartProvider'
import "./cart.css"


const Cart = () => {
  const { cart } = useContext(cartContext);
  const [total, setTotal] = useState(0)

  const getTotalPrice= () => {
    setTotal(
    cart.reduce((acc, product) => acc + product.precio * product.quantity, 0)
    );
  };
  // const createOrder = () =>{

  // }
   useEffect(() => {
    getTotalPrice()
   }, [cart])
  return (
    <div className='cart'>
      <div className='cartDet'>
      {cart.map((product) => (
        <div key={product.id} className='producto'>
          <div className='productoImg'>
            <img src={`/images/${product.imagen}.jpg`} alt={product.nombre} className='imgCart' />
          </div>
          <div className='proddet'>
            <h2>{product.nombre}</h2>
            <h2>${product.precio}</h2>
          </div>
        </div>
      ))}
      </div>
      <div className='total'>
        <h2> Total: ${total}</h2>
        <button >crear orden</button>
      </div>
    </div>
  )
}

export default Cart