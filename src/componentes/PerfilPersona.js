import React from 'react';
import {Fade, Zoom, Rotate} from 'react-reveal';
// <Zoom delay={2000}></Zoom>

// la direccion no aparece si no se establece
// en el componente padre

// franja azul 
const estiloOnline = {
  backgroundColor:'lightblue',
  height:'5px'
}

const PerfilPersona = (props) => {
  
  return(<div 
    className='acerca-persona'>
    
    <div 
    className="contenedor-acerca__persona">
      <h5 
      className="acerca-persona__personal">
      Información Personal
      </h5>
      
      
      <p className="carta-nombre">
        {props.nombre} </p> 
      <p className="carta-texto">      
        {props.direccion} </p>
      <p className="carta-edad">      
         <span 
         className='carta-edad__numero'>
         {props.edad}</span> años
      </p>  
      
      
    </div>
    <div style={estiloOnline}></div>

  </div>
  
);
}; export default PerfilPersona;


// <div>
// <AcercaPersonal 
// nombre='Gerardo Manuel Bautista'
// direccion={this.state.direccion}
// movil={this.state.movil}
// />
// </div>