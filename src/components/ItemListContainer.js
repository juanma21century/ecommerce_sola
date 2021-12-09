import React from 'react'

const ItemListContainer = (greeting) => {

    const saludo = (greeting.mensaje)

    return (
        <div>
            <h1 className = "text-center text-primary" > {saludo} </h1>
        </div>
    )
}

export default ItemListContainer
