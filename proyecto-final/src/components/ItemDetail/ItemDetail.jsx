import React, { useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";
import CartContext from '../../store/Cart-context';




function ItemDetail( {capacitacion}) {
  
  const cartCtx = useContext(CartContext);


  function addHandler (quantityToAdd) {
    cartCtx.addProduct({quantity: quantityToAdd, ...capacitacion});
  }
  return (
  <>
  
      <div className="item-detail">
        <div className="left">
          <div className='img-detail-container'>
            <img src={capacitacion?.imagen} alt="imagen del producto" />
          </div>
        </div>
        <div className="right">
          <div className='info-container'>
            <h1>{capacitacion?.nombre}</h1>
            <p>{capacitacion?.descripcion}</p>
            <p className="precio">${capacitacion?.precio}</p>
            
            <div className='count-container'>
           
            <ItemCount initial ={1} stock={capacitacion.stock} onAdd= {addHandler}/>
            

              
            
              

            </div>
          </div>
        </div>
      </div>
    
  </>       
    )
}

export default ItemDetail




        
        






