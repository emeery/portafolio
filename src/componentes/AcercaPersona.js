import React from 'react';
import {Fade, Zoom, Rotate} from 'react-reveal';
const AcercaPersona = (props) => {
    return(<div className='acerca-persona'>
    
    <div className="contenedor-acerca__persona">
      <h5 className="acerca-persona__titulo">Info. Personal</h5>
      <Zoom  delay={6000}>
      <p className="carta-texto">
        {props.nombre} </p> 
      <p className="carta-texto">      
        {props.direccion} </p>
      <p className="carta-texto">      
        {props.movil} </p>
        </Zoom>
    </div>
    <div style={{backgroundColor:'lightblue',height:'5px'}}></div>

  </div>
  
);
}; export default AcercaPersona;


// <div>
// <AcercaPersonal 
// nombre='Gerardo Manuel Bautista'
// direccion={this.state.direccion}
// movil={this.state.movil}
// />
// </div>