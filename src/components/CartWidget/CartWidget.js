import React from 'react'
import carro from '../../assets/carrito.png'
import Notification from "../Notification/Notification";
import State from '../State/State'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='menu-nav-logo'>
      
      {/* <div className='menu-notificacion'></div> */}
      <Notification/>
      <img className='menu-nav-img'src={carro} alt=''/>
    </div>
  )
}

export default CartWidget