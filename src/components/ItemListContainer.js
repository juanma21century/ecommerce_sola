import React from 'react'
// import ItemCount from './ItemCount';
import ItemList from './ItemList';
import Products from './Products';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    
    useEffect(()=> {
        const promesa = new Promise((res,rej)=> {
            setTimeout(() => {
                res(setProductos(Products))
            }, 2000);
        });

        promesa
        .then("datos cargados con exito")
        .catch("error");
    })


    
    return (
        <div className="mt-4">
            <h1 className="text-center mb-4 text-primary"> CATALOGO</h1>
            <ItemList productos = {productos} />
            
        </div>
    )
}

export default ItemListContainer
