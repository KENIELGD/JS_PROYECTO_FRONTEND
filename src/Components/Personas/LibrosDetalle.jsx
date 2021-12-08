import axios from 'axios';
import React from 'react';

const LibrosDetalle = (props) => {
    const submitDelete=()=>{
            const response=window.confirm('¿Seguro desea eliminar este registro?');
            if(response){
                axios.delete(`http://localhost:3023/libros/${props.libros._id}`)
            .then(()=>{
                alert('El registro se ha eliminado Correctamente');
                window.location.reload();
            })
            .catch((err)=>{
                console.log(err);
                alert(`Ha ocurrido un error en el id ${props.libros._id}`);
            });
        }
    }

    return (
        <div>
            <div className="row">
                <div className="col s12 m6">
                    <div className="card cyan">
                        <div className="card-content white-text">
                            <span className="card-title"><strong>{props.libros.nombreLibro}</strong></span>
                            <p>{props.libros.nombreAutor}</p>
                            <p>{props.libros.fechaPublicacion}</p>
                            <p>{props.libros.estadoLibro}</p>
                            <p>{props.libros.cantidadLibros}</p>
                        </div>
                        <div className="card-action">
                            <button name="action" className="waves-effect red btn" onClick={submitDelete}><i class='bx bxs-x-circle'></i>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LibrosDetalle;
