import React from 'react';
import AgregarClima 
    from '../componentes/AgregarClima';

class Clima extends React.Component {
    render() {
        var estilo = {
            borderWidth: '5px',
            borderStyle: 'solid',
            borderColor:  '#2c3e50',
            overflow: 'auto'
        }
    return(<div 
            style={estilo}
            className='contenedor__clima'>
            <h1>El PRONOSTICO ?</h1>
            <AgregarClima
            onSubmit={this.obtieneClima}
            />
        </div>);
    }
}    
export default Clima;