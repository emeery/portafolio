import React from 'react';
import {connect} from 'react-redux';
import * as creadorAcciones from '../acciones/Colores.js' 
import ContactoBoton from '../componentes/ContactoBoton'; // componente hijo
//import Clima from '../componentes/Clima';

class Contacto extends React.Component {
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

const mapStateToProps = (state) => {
    return state
};
// conecta el componente Colores con la tienda para llamar a la accion cargaColor.     
export default connect(mapStateToProps, creadorAcciones)(Contacto);