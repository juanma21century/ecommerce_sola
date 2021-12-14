import React from 'react'
import cart from '../images/cart.svg'

const CartWidget = () => {
    return (
        <a href="/cart"><img className= "cart-img" src= {cart} alt="" /></a>
    )
}

export default CartWidget
