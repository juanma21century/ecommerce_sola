import React from 'react'
import ItemDetail from './ItemDetail'
import Products from './Products'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

        const [product, setProduct] = useState([]);
        const {id} = useParams()


        useEffect(()=> {
                const promesa = new Promise((res,rej)=> {
                    setTimeout(() => {
                        res(setProduct(Products))
                    }, 2000);
                });
        
                promesa
                .then("datos cargados con exito")
                .catch("error");
            })

            function filterData(){
                    const filteredProducts = product.filter((product)=> 
                    product.id ==(id)
                );
                return filteredProducts;
            }

            const result = filterData(product)

        console.log(result);

        return (
            <div>
                    <ItemDetail product = {result} />
            </div>
        )

}

export default ItemDetailContainer
