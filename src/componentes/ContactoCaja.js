import React from 'react';
import {connect} from 'react-redux';
import * as creadorAcciones from '../acciones/Colores.js'
import Contacto from '../componentes/Contacto';
class ContactoCaja extends React.Component {
    render() {
        return(
            <Contacto 
            handleClick={this.props.cargaColor}
            color={this.props.color}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps, creadorAcciones)(ContactoCaja);