import React from 'react';
import {NavLink} from 'react-router-dom';
import {Fade, Zoom, Rotate} from 'react-reveal';
import material from '../imagenes/material.jpg'
import { Parallax, Background } from 'react-parallax';
import {Tooltip} from 'react-tippy';


const Cabecera = (props) => (
  <div>
    <Parallax 
      strength={300}
      className='cabecera-parallax'
    >
        <div className='cabecera__info' >
          <Fade left delay={3000}>
            <h1 className='cabecera__titulo'
              > { props.titulo } </h1> 
          </Fade>  
          <Fade right delay={2000}>
                  <hr></hr>
          </Fade>
          <Rotate>
            { props.subtitulo && 
          <h3 className='cabecera__subtitulo'
              > {props.subtitulo} </h3> }
          </Rotate>
        
              
        
        </div>
        
        <div className='espacio-cabecera'></div>
        
        <div className='contenedor-iconos'>
              <Tooltip
                  html={(
                <div className='monolito'>
                  <strong> <p>Perfil</p> </strong>  
                </div>
              )}
              position='right'
              >
                  <NavLink 
                      to='/' 
                      className='nav-link' 
                      activeClassName='is-active' 
                      exact={true}
                  > 
                    <i 
                    className='cabecera-icono far fa-keyboard fa-3x'
                  > </i>
                  </NavLink>
                  
                  </Tooltip>
            <hr/>
             
            <Tooltip
                  html={(
                <div className='monolito'>
                  <strong> <p>Contacto</p> </strong>  
                </div>
              )}
              position='right'
              >
            
              <NavLink 
                  to='/contacto' 
                  className='nav-link' 
                  activeClassName='is-active'
              >
              <i 
                className="cabecera-icono fas fa-at fa-3x"
              > </i>
              </NavLink>
            </Tooltip>
            
            <hr/>
            
            <Tooltip
                  html={(
                <div className='monolito'>
                  <strong> <p>Pronóstico</p> </strong>  
                </div>
              )}
              position='right'
              >
                <NavLink 
                    to='/pronostico' 
                    className='nav-link' 
                    activeClassName='is-active'
                > 
                <i 
                  className="cabecera-icono fas fa-bolt fa-3x"
                > </i>
                </NavLink>
            </Tooltip>
        </div>

      <Background 
      className="custom-bg">
          <img src={material} alt={"fondo computadora"} />
      </Background>
    
    </Parallax>
  </div>
);
export default Cabecera;

Cabecera.defaultProps = {
titulo: 'Otro titulo' };
