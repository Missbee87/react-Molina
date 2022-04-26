import React, { useEffect, useState } from 'react'
import './Box.css';
import capacitaciones from '../data/capacitaciones';
import ItemList from '../ItemList';

function getCapacitaciones(){
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve(capacitaciones);
    }, 2000);
  });
}


function Box ({ titulo }) {
  const [capacitaciones, setCapacitaciones] = useState ([]);
  useEffect ( () => {
    getCapacitaciones().then( respuestaPromise => {
      setCapacitaciones(respuestaPromise);
    });

  }, []);
  
  

    return (
      <div className="box">{titulo}
      <ItemList capacitaciones={capacitaciones} />
      </div>
    )
  }



export default Box;
