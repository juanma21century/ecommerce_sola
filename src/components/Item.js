const Item = (productos) => {

    return (
        <div className="card" style="width: 18rem;">
            <img src={productos.imagen} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{productos.nombre}</h5>
                <p className="card-text">{productos.descripcion}</p>
                <p className="card-text">{productos.precio}</p>
                <a href="" className="btn btn-primary">Detalle producto</a>
            </div>
        </div>
    )
}

export default Item
