import React from 'react';
import rocket from '../imagenes/rocket.png';
import {
  BrowserRouter, Switch, Route, Link, NavLink} 
from 'react-router-dom';
import {slide as Menu} from 'react-burger-menu';
class Nav extends React.Component {
  constructor() {
    super();
    this.state = {isOpen:false}
  }
  showSettings = (e) => {
    e.preventDefault();
    this.setState({isOpen:!this.state.isOpen });
  }
  render() {
    return ( 
      <div 
      
      className='nav-contenedor'>
      <nav >
      
        <Menu >
        
      <li><NavLink 
        to="/"> <h3>Biografía</h3>
      </NavLink></li>
      
      <li><NavLink 
        className='enlace-item'
        to="/experiencia"> <h3>Experiencia</h3>
      </NavLink></li>

      <li><NavLink 
        to="/pronostico"><h3>Pronostico</h3>
      </NavLink></li>

      <li><NavLink 
        to="/contacto"> <h3 >Contacto</h3>
      </NavLink></li> 
        <hr/>
        <center>
      <a  href="https://github.com/emeery/portafolio" target="_blank" aria-hidden="true">
      <i className="fab fa-github fa-1x"></i></a>
      &nbsp;
      <a href="https://jsfiddle.net/emeery/qjg4p1dy/" target="_blank" aria-hidden="true">
      <i className="fab fa-jsfiddle" aria-hidden="true"></i></a>
      &nbsp;
      <a href="https://codepen.io/Emeeery/#"  target="_blank" aria-hidden="true">
      <i className="fab fa-codepen fa-1x" aria-hidden="true"></i></a>
        
        <p className='logo-jerry'>© 2018 Jerry MB</p>
        </center>
        
        </Menu>
      
      </nav>
      </div>  
      );
  }
}; export default Nav;



// <a className="navbar-brand" href="#">Navbar</a>
// <div class="pos-f-t">
//   <div class="collapse" id="navbarToggleExternalContent">
//     <div class="bg-dark p-4">
//       <h4 class="text-white">Collapsed content</h4>
//       <span class="text-muted">Toggleable via the navbar brand.</span>
//     </div>
//   </div>
//   <nav class="navbar navbar-dark bg-dark">
//     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//   </nav>
// </div>