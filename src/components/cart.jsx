import React from 'react'

import {useCart} from "../context/Cart"

const cart = () => {
    const cart = useCart();

    const total = cart.items.reduce((a,b) => a+b.pri)
    
  return (
    <div className='cart'>
        <h1>Cart</h1>
        
            {cart && cart.items.map((item) => ( <li>{item.name} - ${item.price}</li>
            ))
        }

        <h5>Total Bill: ${total}</h5>
    </div>
  )
}

export default cart