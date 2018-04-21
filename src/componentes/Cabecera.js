import React from 'react';
import {NavLink} from 'react-router-dom';
import {Fade, Zoom, Rotate} from 'react-reveal';
import forest from '../imagenes/forest.jpg'
import { Parallax, Background } from 'react-parallax';

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
        
        <NavLink 
            to='/' 
            className='nav-link' 
            activeClassName='is-active' 
            exact={true}
        > 
          <i className="far fa-keyboard fa-3x"></i>
        </NavLink>

        
        <NavLink 
            to='/contacto' 
            className='nav-link' 
            activeClassName='is-active'
        > 
          <i className="fas fa-at fa-3x"></i>
        </NavLink>

        <NavLink 
            to='/pronostico' 
            className='nav-link' 
            activeClassName='is-active'
        > 
          <i className="fas fa-bolt fa-3x"></i>
        </NavLink>
      
      <Background 
      className="custom-bg">
          <img src={forest} alt={"nubes"} />
      </Background>
    
    </Parallax>
  </div>
);
export default Cabecera;

Cabecera.defaultProps = {
titulo: 'Portapapeles' };
