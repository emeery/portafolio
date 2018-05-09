import React from 'react';
import {connect} from 'react-redux';
import * as creadorAcciones from '../acciones/colores.js' 

class Email extends React.Component {
    render() {
        return(
            <div className='contenedor-contacto'>

            <ContactoBoton
            handleClick={this.props.cargaColor}
            color={this.props.color}
            />
            
            </div>

        );
    }
}
// devuelve el estado 
const mapStateToProps = (state) => {
    return state
};
// conecta el componente Email con la tienda Redux 
// para llamar a la accion cargaColor.     
export default connect(mapStateToProps, creadorAcciones)(Email);

class ContactoBoton extends React.Component {
    render() {
        return(
            <div>
                <center>
                    <div className='envoltura-boton'></div>
                        <button
                        className='boton-color'
                        style={{backgroundColor:`${this.props.color}`}}
                        onClick={()=>{this.props.handleClick() }} 
                        type="button" >
                        <p className="card-text-correo"> 
                        gerardobautista40<span>@</span>outlook.com</p>
                        </button>
                </center>
            </div>
        );
    }
}