import { createContext, useState } from "react";


const CartContext = createContext ({
    products: [],
    addProduct: () => {},
    removeProduct: () => {},
    clear: () => {},
    isInCart: () => {},
    getCartQuantity: () => {}
});


export const CartContextProvider = ({children}) => {
    const [capacitaciones, setCapacitaciones] = useState([]);

    const addProduct = (product) => {
        const repeatedItemIndex = capacitaciones.findIndex(capacitacion => capacitacion.id === product.id)
        if (repeatedItemIndex !== -1) {
            setCapacitaciones(capacitaciones.map(p => p.id === product.id ? {...p, quantity: p.quantity + product.quantity}: p));
        } else {
        setCapacitaciones([product,...capacitaciones]);
    }
}

    const removeProduct = (id) => {
        const indexToRemove = capacitaciones.findIndex(capacitacion => capacitacion.id === id );
        if (capacitaciones[indexToRemove].quantity === 1){
            setCapacitaciones(capacitaciones.filter(i => i.id !== id))
  
        } else {
        setCapacitaciones(capacitaciones.map(p => p.id === id ? {...p, quantity: p.quantity -1} :p));

    }
}
    const clear = () => {
        setCapacitaciones([]);
    }

    const isInCart = (id) => {
        return capacitaciones.map(p => p.id).indexOf(id) !== -1;
    }
    const getCartQuantity = () => {
        return capacitaciones.reduce((total,value) => {
            return total + value.quantity
        }, 0)
    }

    return (
        <CartContext.Provider value={{
            products: capacitaciones,
            addProduct,
            removeProduct,
            clear,
            isInCart,
            getCartQuantity
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;