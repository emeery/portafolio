import React from 'react';

class Acerca extends React.Component {
    state = {nombre:'Gerardo'}
    render() {
        return (
        <section>
            <div 
        className='acerca-contenedor' >
        <h1
        className='acerca__nombre'
        >{this.state.nombre}</h1>
        
        <p 
        className='acerca__titulo'
        > Acerca .</p>
        
            </div>
        </section>
        
        );
    }
} export default Acerca;
 