import { createContext, useState } from "react";

const CartContext = createContext(null);

export const useCart = () => {
    const cart = iseContext(CartContext);
    return cart;
}

export const CartProvider = (props) => {
    const [items,setItems] = useState([]);
    return (
        <CartContext.Provider value={{items,setItems}}>
            {props.children}
        </CartContext.Provider>
    );
}