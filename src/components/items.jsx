import React from 'react'
import { CartContext} from "../context/Cart";
import {useCart} from "../context/Cart";

const items = (props) => {
    const cart = useContext(CartContext);
    console.log('Cart')
  return (
    <div className='item-card'>
        <h4>{props.name}</h4>
        <p>Price: ${props.price}</p>
        <button onClick={()=> cart.setItems([...cart.items, {name: props, price: props.price},

        ])
        }
        >Add To Cart</button>
    </div>
  )
}

export default items