import { useState } from "react"

const ItemCount = ( {initial, stock} ) => {

    const[counter, setCounter] = useState(initial);

    const incrementarCounter = () => {
        if(stock === counter){
            alert("No hay mas stock")
        }
        else{
            setCounter (counter+1)
        }
    }

    const decrementarCounter = () => {
        if(counter === 0){
            alert("No se pueden ingresar cantidades menores a 0")
        }
        else{
            setCounter (counter-1)
        }
    }

    const onAdd = () => {
        console.log("Funcion onAdd");
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
                <button className=" btn-primary btn-sm col-sm-1" onClick={onAdd}>Agregar</button>
            </div>
            
            
        </div>
    )
}

export default ItemCount
