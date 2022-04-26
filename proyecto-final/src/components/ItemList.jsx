import React from 'react'
import Item from './Item/Item'



function ItemList( {capacitaciones}) {
  return (
      <>
      {capacitaciones.map(thiscapacitaciones => {
          return(
              <Item capacitaciones={thiscapacitaciones} key={thiscapacitaciones.id} />
              
          )

      })
     
    }
    </>
  )
}


export default ItemList