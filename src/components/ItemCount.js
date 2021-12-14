import { useState } from "react"

const ItemCount = (props) => {

    const stock = props.stock;
    const initial = props.initial;

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

    return (
        
        <div className="align-items-center d-flex justify-content-center">
            <button className="btn-danger btn-lg" onClick={()=> decrementarCounter() }>
                - 
            </button>
            <h1 className="mb" >Cantidad : {counter} </h1>
            <button className="btn-danger btn-lg" onClick={()=> incrementarCounter() }>
                +
            </button>
                
            
        </div>
    )
}

export default ItemCount
