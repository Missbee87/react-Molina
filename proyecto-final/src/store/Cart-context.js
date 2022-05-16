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

    const addProduct = (product, quantity) => {
        const repeatedItemIndex = capacitaciones.findIndex(capacitacion => capacitacion.id === product.id)
        if (repeatedItemIndex !== -1) {
            const units = unitsPerProduct(repeatedItemIndex !== -1);
            const {stock} = capacitaciones;
            const quantityAvailable = stock - units;
            if (quantity > quantityAvailable) {
                alert (`no podés agregrar más de ${quantityAvailable} productos`);
            }

            
           
        setCapacitaciones(capacitaciones.map(p => p.id === product.id ? {...p, quantity: p.quantity + product.quantity}: p));
        } else {
        setCapacitaciones([product,...capacitaciones]);
    }
}

   
    
    const unitsPerProduct = (id) => {
        return capacitaciones.find((capacitacion) => capacitacion.id === id).quantity;
};
    const removeProduct = (id) =>{
        if (unitsPerProduct(id) === 1) {
            return deleteById(id);
        }
        setCapacitaciones(
            capacitaciones.map((product) =>
            product.id === id
            ?{...product,quantity: product.quantity - 1}
            :product
        )
        );

    }
   
    const deleteById = (id) => {
        capacitaciones(capacitaciones.filter((capacitacion) => capacitacion.id !== id));
    };
    

   
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
    const getTotalPrice = () => {
        return capacitaciones.reduce((total,value) => {
            return total + value.precio*value.quantity
        },0)
    }

    return (
        
        <CartContext.Provider value={{
            products: capacitaciones,
            addProduct,
            removeProduct,
            clear,
            isInCart,
            getCartQuantity,
            getTotalPrice,
            unitsPerProduct
        }}>
            {children}
        </CartContext.Provider>
        
        
    )
}

export default CartContext;