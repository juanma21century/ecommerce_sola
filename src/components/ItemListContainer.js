import React from 'react'
import Item from './Item'
import ItemCount from './ItemCount';



const productos = [
    {nombre: "Mother Board", precio: 15000, descripcion: "Mother board as2560", img: '../images/productos/motherboard.jpg' },
    {nombre: "Mother Board2", precio: 15000, descripcion: "Mother board as2560", img: '../images/motherboard.jpg' },
    {nombre: "Mother Board3", precio: 15000, descripcion: "Mother board as2560", img: "./images/motherboard.jpg"},
    {nombre: "Mother Board4", precio: 15000, descripcion: "Mother board as2560", img: "./images/motherboard.jpg"},
    {nombre: "Mother Board5", precio: 15000, descripcion: "Mother board as2560", img: "./images/motherboard.jpg"}
    ];

const ItemListContainer = () => {

    return (
        <div>
            <ItemCount stock = {4} initial = {1} />
            {/* {productos.map((producto, indice) => <Item key={indice} imagen = {producto.img} nombre = {producto.nombre} precio = {producto.precio} descripcion = {producto.descripcion}  />)} */}
             

        </div>
    )
}

export default ItemListContainer
