import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Item from './Item'
import ItemCount from './ItemCount'

const ItemDetail = ({product}) => {

  console.log(product);

  const onAdd = (cantidad) => {
    console.log("Se agregaron " +  cantidad + " items");
  }

  return (
    <>
      {product &&
        product.map((product) => (
          <div className='d-flex justify-content-center mt-4'>
            <Card className="d-flex align-items-center" style={{ width: '19rem' }}>
              <Card.Title className="text-center"> Detalle Item </Card.Title>
              
              <Card.Img className="card-img" variant="top" src= {product.imagen} />
              <Card.Title className="text-center"> {product.nombre} </Card.Title>
              <Card.Body>
                  
                  <Card.Text className="text-center">
                  $ {product.precio}
                  </Card.Text>
                  <Card.Text className="text-center">
                  {product.descripcion}
                  </Card.Text>
                  {/* <Link to = {"item/" + product.id} className="btn btn-danger" > Agregar al carrito </Link> */}
                  <Card.Text className="text-center">
                  {<ItemCount initial={0} stock={5} onAdd = {onAdd} />}
                  </Card.Text>
              </Card.Body>
            </Card>
      </div>
                
        ))}
    </>
  );
}

export default ItemDetail
