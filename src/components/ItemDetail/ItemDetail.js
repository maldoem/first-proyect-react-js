import React, { useEffect } from "react";
import State from "../State/State"
import "./ItemDetail.css"

const ItemDetail = ({ prodSelect }) => {

    useEffect (() => {
      
    },[prodSelect])

  return ( 
    <div className="detdad">
        <div className="detalles">
            {console.log(prodSelect)}
            <h1>{prodSelect[0].nombre}</h1>
            <img src={`images/${prodSelect[0].imagen}.jpg`} alt={prodSelect[0].nombre}/>
            
            <p>{prodSelect[0].descripcion}</p>
            <p>${prodSelect[0].precio}</p>
            <State/>
        </div>
    </div>
  );
};

export default ItemDetail;
