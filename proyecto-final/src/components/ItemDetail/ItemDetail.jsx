import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";


function ItemDetail( {capacitacion}) {
  return (
  <>
    <div>
      <div className="item-detail">
        <div className="left">
          <img src={capacitacion?.imagen} alt="" />
        </div>
        <div className="right">
          <h1>{capacitacion?.nombre}</h1>
          <p>{capacitacion?.descripcion}</p>
          <p className="precio">${capacitacion?.precio}</p>
          <ItemCount stock={5} initial={0}/>
        </div>
      </div>
    </div>
  </>       
    )
}

export default ItemDetail




        
        






