import React from 'react'
import { Link } from 'react-router-dom'
import cart from '../images/cart.svg'

const CartWidget = () => {
    return (
        <Link to={"/cart"}><img className='cart-img' src= {cart} alt="" /></Link>
        // <a href="/cart"><img className= "cart-img" src= {cart} alt="" /></a>
    )
}

export default CartWidget
