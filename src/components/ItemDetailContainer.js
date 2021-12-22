import React from 'react'
import ItemDetail from './ItemDetail'
import Products from './Products'
import { useEffect, useState } from 'react'


const ItemDetailContainer = () => {
    
    const [productos, setProductos] = useState([]);

    useEffect(()=> {
        const promesa = new Promise((res,rej)=> {
            setTimeout(() => {
                res(setProductos(Products))
            }, 2000);
        });

        promesa
        .then("success")
        .catch("error");
    })

        return (
            <div>
                   <ItemDetail productos = {Products} />
            </div>
        )
 

    
}

export default ItemDetailContainer
