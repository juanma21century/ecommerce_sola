import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap"

const Item = (producto) => {

    return (
        <div  className="mb-4" >
            <Card className="d-flex align-items-center" style={{ width: '18rem' }}>
                <Card.Title className="text-center"> {producto.nombre} </Card.Title>
                <Card.Img variant="top" src= {producto.imagen} />
                <Card.Body>
                    
                    <Card.Text className="text-center">
                    $ {producto.precio}
                    </Card.Text>
                    <Button  variant="primary">Detalle producto</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item
