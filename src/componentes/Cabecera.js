import React from 'react';
import {NavLink} from 'react-router-dom';
import {Fade, Zoom, Rotate} from 'react-reveal';
import stars from '../imagenes/stars.jpg';
import { Parallax, Background } from 'react-parallax';
import {Tooltip} from 'react-tippy';
import Nav from './Nav';

const Cabecera = (props) => (
  <div>
    <Parallax 
      strength={300}
      className='cabecera-parallax'
    >
        <Nav/>
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
              
          <i 
          className="fa fa-angle-down fa-5x" 
          aria-hidden="true"> </i>
          
              
        
        </div>
        
        <div className='espacio-cabecera'></div>
        
      <Background 
      className="custom-bg">
          <img src={stars} />
      </Background>
      
      
    </Parallax>
  </div>
);
export default Cabecera;

// hola mi nomrbe es
Cabecera.defaultProps = {
titulo: 'Gerardo Bautista',
 };
