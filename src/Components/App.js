import React from 'react'; 
import LibrosLista from "./Personas/LibrosLista";
import LibrosDetalle from "./Personas/LibrosDetalle";
import LibrosForm from "./Personas/LibrosForm";
import axios from 'axios';

import './styles.css';

class App extends React.Component {

    constructor(props){
        super(props)
        this.state={
            libros:[],
            librosActual:{}
        }
        //vincular la funcion actualizarPersona al objeto - Metodo como propiedad
        this.actualizarLibros=this.actualizarLibros.bind(this)
    }
    
    componentDidMount(){
        const URL='http://localhost:3023/libros';
        axios.get(URL)
             .then((res)=>{
                this.setState({
                    libros: res.data
                })
             }).catch((err)=>console.log(err));
    }

    //Funcion para asignar personaActual - tipo clase - Metodo
    actualizarLibros(libros){
        this.setState({
            librosActual: libros
        })
    }

    render(){
        return (
            <div>
              <div className="row">    
                    <nav className="s__navbar">
                        <div className="nav-wrapper container">
                        <a href="/" className="brand-logo"><i class='bx bx-book-reader bx-md'></i>TU BIBLIOTECA</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="/">Inicio</a></li>
                        </ul>
                        </div>
                    </nav>
              </div>
              <div className="row">
                  <div className="col s12 m4">
                      <LibrosLista 
                            listaLibros={this.state.libros}
                            actualizarLibros={this.actualizarLibros} />
                  </div>
                  <div className="col s12 m8">
                    <LibrosDetalle libros={this.state.librosActual} />
                  </div>
              </div>
              <LibrosForm />
              <footer className="page-footer s__footer">
                        <div className="container">
                        © 2021 Copyright TU BIBLIOTECA
                        <a className="grey-text text-lighten-4 right" href="/">Inicio</a>
                        </div>
                </footer>
            </div>
        );
    }       
 
}

export default App;
