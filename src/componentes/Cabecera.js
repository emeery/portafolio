import React from 'react';
import {NavLink} from 'react-router-dom';
import {Fade, Zoom, Rotate} from 'react-reveal';
// una nueva nota pendiente, el oscuro fondo tomaba un aspecto lúgubre 
// y la unica fuente de luz que despedía 3#sx1$. dotted edge 

const Cabecera = (props) => (
<div className='cabecera-nota'>
    
    <div className='cabecera__info'>
            <div>
             <Fade  left delay={4000}>
            <h1 className='cabecera__titulo'
            >{props.titulo}</h1> </Fade>
                    <hr></hr>
             <Zoom delay={2000}>
            {props.subtitulo && 
            <h3
            className='cabecera__subtitulo'
            >{props.subtitulo} </h3>
            } </Zoom>
            
            </div>
            <div
            className='espacio-cabecera'
            ></div>
        <NavLink 
            to='/' 
            className='nav-link' 
            activeClassName='is-active' 
            exact={true}
        > Acerca 
        </NavLink>

        <NavLink 
            to='/contacto' 
            className='nav-link' 
            activeClassName='is-active'
        > Correo Electronico
        </NavLink>
    
    </div>

</div>

); export default Cabecera;

Cabecera.defaultProps = {
    titulo: 'Portapapeles' };



    // to='/portafolio' className='nav-link' 
    // activeClassName='is-active' 
    // exact={true}
    // > Portafolio
    // </NavLink>