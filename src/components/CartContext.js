import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const { Provider } = CartContext;

export const useContexto = () => {
    return useContext(CartContext);
}

const CustomProvider = ({children}) => {

    const [cantidadTotal, setCantidadTotal] = useState(0);
    const [carrito, setCarrito] = useState([]);

    const isInCart = (id) => {
        return carrito.some(item => item.id === id);
    }

    const addItem = (item, cantidad) => {

        if(isInCart(item.id)){

            const copiaCarrito = [...carrito];
            let itemInCart = copiaCarrito.find(p => p.id === item.id);
            itemInCart.cantidad += cantidad;
            setCarrito(copiaCarrito);
            setCantidadTotal(cantidadTotal + cantidad)

        } else{
            const itemConCantidad = {
                ...item,
                cantidad
            }

            setCarrito([...carrito, itemConCantidad]);
            setCantidadTotal(cantidadTotal + cantidad);
        }
    }

    const removeItem = (id, cantidad) => {
        setCantidadTotal(cantidadTotal - cantidad)
        setCarrito(carrito.filter(item => item.id !== id));
    }

    const clearCart = () => {
        setCarrito([]);
        setCantidadTotal(0);
    }

    const valorDelContexto = {
        cantidadTotal,
        carrito,
        addItem,
        removeItem,
        clearCart
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider;