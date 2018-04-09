import React from 'react';
import {connect} from 'react-redux';
import * as creadorAcciones from '../acciones/Colores.js' 
import ColoresCaja from '../componentes/ColoresCaja'; // componente hijo
class Colores extends React.Component {
    render() {
        return(
            <ColoresCaja 
            handleClick={this.props.cargaColor}
            color={this.props.color}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps, creadorAcciones)(Colores);