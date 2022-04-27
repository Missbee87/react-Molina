import React, { useEffect, useState } from 'react'
import './ItemListContainer.css';
import capacitaciones from '../data/capacitaciones';
import ItemList from '../ItemList';


function getCapacitaciones(){
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve(capacitaciones);
    }, 2000);
  });
}


function ItemListContainer ({ greeting }) {
  const [capacitaciones, setCapacitaciones] = useState ([]);
  useEffect ( () => {
    getCapacitaciones().then( respuestaPromise => {
      setCapacitaciones(respuestaPromise);
    });

  }, []);
  
  

    return (
      <div className="box">{greeting}
      <div className="container">
        <div className="row">
        <ItemList capacitaciones={capacitaciones} />
        </div>
      </div>
      </div>
    )
  }



export default ItemListContainer;
