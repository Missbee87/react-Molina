import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";
import {Link} from 'react-router-dom';




function ItemDetail( {capacitacion}) {
  const [cantidadDeProductos, setCantidadDeProductos] = useState (null);
  function addHandler (quantityToAdd) {
    setCantidadDeProductos(quantityToAdd);
  }
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
          <div className='count-container'>
            {cantidadDeProductos ? 
              <button><Link to ='/cart'>Terminar compra({ cantidadDeProductos} items)</Link></button> :
              <ItemCount stock={5} initial={0} onAdd= {addHandler}/>
              }

          </div>
          
        </div>
      </div>
    </div>
  </>       
    )
}

export default ItemDetail




        
        






