import React from 'react';
import {NavLink} from 'react-router-dom';
// una nueva nota pendiente, el oscuro fondo tomaba un aspecto lúgubre 
// y la unica fuente de luz que despedía 3#sx1$. dotted edge 

const Cabecera = (props) => (<div className='cabecera-nota'>
    <div>
        <h1 className='cabecera__titulo'
        >{props.titulo}</h1>
    
        {props.subtitulo && 
        <h3
        className='cabecera__subtitulo'
        >{props.subtitulo} </h3>
        }
    
    </div>
    
    <NavLink to='/' className='nav-link' activeClassName='is-active' exact={true}>Hogar</NavLink>
    <NavLink to='/portafolio' className='nav-link' activeClassName='is-active' exact={true}>Portafolio</NavLink>
    <NavLink to='/contacto' className='nav-link' activeClassName='is-active'>Contacto</NavLink>
    </div>

); export default Cabecera;

Cabecera.defaultProps = {
    titulo: 'Indecisiones' };
