import { useState } from "react"

const ItemCount = ( {initial, onAdd} ) => {

    const[counter, setCounter] = useState(initial);

    const incrementarCounter = () => {
        setCounter(counter+1)
    }

    const decrementarCounter = () => {
        if(counter === 0){
            alert("No se pueden ingresar cantidades menores a 0")
        }
        else{
            setCounter (counter-1)
        }
    }

    const agregarItem = () => {
        setCounter(initial)
        onAdd(counter)
    }

    return (
        
        <div>
            <div className="align-items-center d-flex justify-content-center">
                <button className="btn-primary btn-lg" onClick={decrementarCounter }>
                    - 
                </button>
                <h1 className="mb px-5" >{counter} </h1>
                <button className="btn-primary btn-lg" onClick={incrementarCounter }>
                    +
                </button>
                

            </div>
            <div className="d-flex align-items-center justify-content-center">
                <button className=" btn-primary btn-lg col-sm-9" onClick={agregarItem}>Agregar al carrito</button>
            </div>
            
            
        </div>
    )
}

export default ItemCount
