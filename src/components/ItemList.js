import React from 'react'
import Item from './Item'
import {Link, NavLink} from 'react'

const ItemList = (productos) => {


    return (
        <>
        {productos.productos.length === 0 ?(
            <h1 className='text-center'>Loading...</h1>
        ):
        (<div className="d-flex flex-wrap justify-content-around mt-4 ml-3">
            {productos.productos.map((producto,key)=> <Item key = {key} nombre = {producto.nombre} precio = {producto.precio} imagen = {producto.imagen}  />)}  
        </div>)
        }
        </>
        
    )
}

export default ItemList
