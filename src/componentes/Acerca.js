import React from 'react';

class Acerca extends React.Component {
    state = {nombre:'Gerardo'}
    render() {
        return (
        <div>
            <div 
        className='acerca-contenedor' >
        <h1
        className='acerca__nombre'
        >{this.state.nombre}</h1>
        
        <p 
        className='acerca__titulo'
        > Acerca .</p>
        
            </div>
        </div>
        
        );
    }
} export default Acerca;
 