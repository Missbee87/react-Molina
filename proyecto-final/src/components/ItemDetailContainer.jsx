import React, { useEffect, useState } from 'react'
import capacitaciones from './data/capacitaciones'
import ItemDetail from './ItemDetail/ItemDetail';


function getCapacitacion(){
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      
        resolve (capacitaciones);
    }, 2000);
    
  });
}


function ItemListContainer () {
  const [capacitacion, setCapacitacion] = useState ([]);
  useEffect ( () => {
    getCapacitacion().then( respuestaPromise => {
      setCapacitacion(respuestaPromise[0]);
    });

  }, []);
  
  

    return (
    
      <div className="container">
        <div className="row">
        <ItemDetail capacitacion={capacitacion} />
        </div>
       
          
      
      </div>
    
    )
  }



export default ItemListContainer;
