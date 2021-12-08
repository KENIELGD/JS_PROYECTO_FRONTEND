import axios from 'axios';
import React from 'react';

class LibrosForm extends React.Component{

    constructor(props){
        super(props)
        this.state={}
    }
    
    //Funcion para enviar request POST al endpoint
    submitNuevosLibros(e){
        //Anular comportamiento por defecto del form
        e.preventDefault();
        //peticion con axios
        axios.post('http://localhost:3023/libros', {
            nombreLibro: this.refs.nombreLibro.value,
            nombreAutor: this.refs.nombreAutor.value,
            fechaPublicacion: this.refs.fechaPublicacion.value,
            estadoLibro: this.refs.estadoLibro.value,
            cantidadLibros: this.refs.cantidadLibros.value
        }).then(res=>{
            console.log(res.data);
            alert(`El libro ${res.data.nombreLibro} fue registrado correctamente`);
            window.location.reload();
        }).catch(err=>console.log(err));
    }

    render(){
        return (
            <div className="container" style={{
                'backgroundColor': '#eeeeee',
                'padding': '20px 40px',
                'marginBottom': '30px',
                'borderRadius': '5px'
            }}>
               <div className="row">
                   <h4 className="center"><strong>Nuevo libro</strong></h4>
                    <form className="col s12" onSubmit={this.submitNuevosLibros.bind(this)}>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="nombreLibro" ref="nombreLibro" type="text" className="validate" />
                                <label htmlFor="nombreLibro">Nombre libro: </label>
                            </div>
                            <div className="input-field col s6">
                                <input id="nombreAutor" ref="nombreAutor" type="text" className="validate" />
                                <label htmlFor="nombreAutor">Nombre Autor: </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="fechaPublicacion" ref="fechaPublicacion" type="date" className="validate" />
                                <label htmlFor="fechaPublicacion">Fecha publicacion: </label>
                            </div>
                            <div className="input-field col s6">
                                <input id="estadoLibro" ref="estadoLibro" type="text" className="validate" />
                                <label htmlFor="estadoLibro">Estado libro: </label>
                            </div>
                            <div className="input-field col s6">
                                <input id="cantidadLibros" ref="cantidadLibros" type="text" className="validate" />
                                <label htmlFor="cantidadLibros">Cantidad libros: </label>
                            </div>
                            
                        </div>
                        <div>
                            <button type="submit" name="action" className="waves-effect waves-light btn">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
   
}

export default LibrosForm;
