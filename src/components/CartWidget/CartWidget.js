import React from 'react'
import carro from '../../assets/carrito.png'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='menu-nav-logo'>
      <div className='menu-notificacion'>0</div>
      <img className='menu-nav-img'src={carro} alt=''/>
    </div>
  )
}

export default CartWidget