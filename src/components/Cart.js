import { useContexto } from './CartContext'
import { addDoc , collection } from 'firebase/firestore'
import { data } from './firebase'


const Carrito = () => {

    const { carrito, removeItem, clearCart, cantidadTotal } = useContexto()

    const finalizarCompra = () => {
        
        const ventasCollection = collection(data, "ventas")
        addDoc(ventasCollection, {
            comprador : {
                nombre : "Homero",
                apellido : "Simpson",
                email : "homero@gmail.com"
            },
            items : carrito,
            total : cantidadTotal
        } )
        .then((resultado)=> {
            console.log(resultado.items);
            clearCart();
        })
        
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
                    <p className="text-center">Total: ${total}</p>
            </div>
            </div>) : <p className='text-center display-4 text-success'>El Carrito esta VACIO</p>}
            
            <div className='text-center'>
                <button className="btn btn-danger mt-5 me-3" onClick={finalizarCompra}>Finalizar compra</button>
                <button className="btn btn-danger mt-5" onClick={clearCart}>Vaciar carrito</button>
            </div>
        </div>
    )
}

export default Carrito
