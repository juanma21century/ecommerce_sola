import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const lista = [{primero:2},{segundo:2},{tercero:3}];

    return (
        <div>
            <ItemDetail lista = {lista} />
        </div>
    )
}

export default ItemDetailContainer
