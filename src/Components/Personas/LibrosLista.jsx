import React from 'react';

const LibrosLista = (props) => {
    return (
        <div>
            <ul className="collection with-header">
                <li className="collection-header"><h4><strong>Biblioteca - Libros</strong></h4></li>
                
                {
                    props.listaLibros.map((element)=>{
                        return (
                            <li className="collection-item" 
                                key={element._id}
                                onClick={props.actualizarLibros.bind(this, element)}
                                style={{
                                    'cursor': 'pointer'
                                }}
                            ><i class='bx bxs-book-bookmark'></i> {element.nombreLibro}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default LibrosLista;
