import React from 'react'
import ItemList from './ItemList';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { data } from './firebase'
import { collection, getDocs, query, where } from "firebase/firestore";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { params } = useParams();

    useEffect(() => {

        const itemsCollection = collection(data, "productos"); 

        if (params) {

            const consulta = query(itemsCollection, where("params", "==", params));

            getDocs(consulta)
            .then(({ docs }) => {
                setItems(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            })
            .catch((error) =>{
                console.log(error);
            })

        } else {

             getDocs(itemsCollection)
            .then(({ docs }) => {
                setItems(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            })
            .catch((error) =>{
                console.log(error);
            }) 
        }

    }, [params])

    
    return (
        <>
        {items.length > 0 ? (
            <div className="container mb-5">
                <ItemList productos={items}/>
            </div>
        ) : 
            <h1 className='text-center'>Cargando...</h1>
        
        }
    </>
    )
}

export default ItemListContainer
