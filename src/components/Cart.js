import { useContexto } from './CartContext'


const Carrito = () => {

    const { carrito, removeItem, clearCart } = useContexto()

    const finalizarCompra = () => {
        clearCart();
    }

    let total = 0;
    carrito.map(item => {
        return total += item.cantidad * item.precio;
    })

    return (
        <div className="container">
            <h1 className="text-center">Carrito de compras</h1>
            {carrito.length > 0 ? (
            <div>
            <table className="table align-middle ">
                <thead>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Subtotal</th>
                </thead>
                <tbody>
                    {carrito.map ((producto,key) => {
                        return (
                            
                        <tr>
                            {/* {key={producto.id}} */}
                            <td className="text-uppercase">{producto.nombre}</td>
                            <td>{producto.cantidad}</td>
                            <td>${producto.precio}</td>
                            <td>${producto.cantidad*producto.precio}</td>
                            <td><button className="btn btn-danger" onClick={() => {removeItem(producto.id, producto.cantidad)}}>Borrar Item</button></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table> 
            <div className="row">
                    <p className="display-6 text-center">Total: ${total}</p>
            </div>
            </div>) : <p>El Carrito esta VACIO</p>}
            
            <div>
                <button className="btn btn-danger mt-5" onClick={finalizarCompra}>Finalizar compra</button>
                <button className="btn btn-danger mt-5 me-3" onClick={clearCart}>Vaciar carrito</button>
            </div>
        </div>
    )
}

export default Carrito
