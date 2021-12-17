import React from 'react'
import Item from './Item';

const ItemList = (productos) => {

    return (
        <div className="d-flex flex-wrap justify-content-around mt-4">
            {productos.productos.map((producto,key)=> <Item key = {key} nombre = {producto.nombre} precio = {producto.precio} imagen = {producto.imagen}  />)}  
        </div>
    )
}

export default ItemList
