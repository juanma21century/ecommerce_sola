import React from 'react'

const ItemDetail = (lista) => {

    console.log(lista);
    return (
        <div>
            <h1> {lista.lista.map(e=> e.primero)} </h1>
        </div>
    )
}

export default ItemDetail
