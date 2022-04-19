import React from 'react'

const Button = (props)  => {
    const {texto, color} = props;
    
  return (
    <>
        <button style={{color: color}}>{texto}</button>
        
        <input type="text" />
    </>
  )
}
 export default Button;