import React from 'react'
import ItemCount from './ItemCount'
import { useContexto } from './CartContext'
import { Card } from 'react-bootstrap'

const ItemDetail = ({producto}) => {

  const { addItem } = useContexto();

  const mostrarCantidad = (cantidad) => {
      addItem(producto, cantidad);
  }

  
  return (
    <Card className="d-flex align-items-center mt-2" style={{ width: '22rem' }}>
    <Card.Title className="text-center"> {producto.nombre} </Card.Title>
    <Card.Img className="card-img" variant="top" src= {producto.imagen} />
    <Card.Body>
        <Card.Text>
          {producto.descripcion}
        </Card.Text>
        <Card.Text className="text-center font-weight-bold">
        $ {producto.precio}
        </Card.Text>
        
        <ItemCount initial={1} onAdd={mostrarCantidad}/>
    </Card.Body>
    </Card>
  )
}

export default ItemDetail