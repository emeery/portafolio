import React from 'react';
import auroraImagen from './../imagenes/aurora.jpg';
var envoltura = {
    backgroundImage: `url(${auroraImagen})`
};
const Hogar = (props) => {
    return( <div 
        className='hogar-contenedor' >
        <h1>{props.nombre}</h1>
        <h2 className='hogar__titulo'
        > Acerca .</h2>
    </div>);
}; export default Hogar;