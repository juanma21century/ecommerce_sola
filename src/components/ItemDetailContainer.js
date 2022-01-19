import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { data } from "./firebase"
import { collection, getDoc, doc } from "firebase/firestore"

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {

        const itemsCollection = collection(data, "productos");
        const consultaDoc = doc(itemsCollection, id);

        getDoc(consultaDoc)
            .then((res) => {
                setItem(res.data());
            })
            .catch((error) => {
                console.log(error);
            })

    }, [id]);

    return (
        <>
        {item !== {} ? (
            <div className="container d-flex justify-content-center">
                <ItemDetail producto={item} />
            </div>
        ) : 
            <h1 className='text-center'>Cargando...</h1>}
        </>
    )
}

export default ItemDetailContainer