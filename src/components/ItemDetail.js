import React from 'react'
import { Card, Button } from 'react-bootstrap'


const ItemDetail = (productos) => {

    return (

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {productos.productos[1].imagen} />
        <Card.Body>
            <Card.Title>{productos.productos[1].nombre}</Card.Title>
            <Card.Text>
            {productos.productos[1].descripcion}
            </Card.Text>
            <Button variant="primary">Agregar al Carrito</Button>
        </Card.Body>
        </Card>
    )
}

export default ItemDetail
