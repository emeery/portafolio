import React from 'react';
import rocket from '../imagenes/rocket.png';
import {
  BrowserRouter, Switch, Route, Link, NavLink} from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return ( 
      
      <nav className='transparent'>
        <ul>
          
          <li><NavLink 
            to="/"> <h1>Biografía</h1>
          </NavLink></li>
          
          
          
          <li><NavLink 
            to="/contacto"> <h1>Contacto</h1>
          </NavLink></li>
        
          <li><NavLink 
            to="/experiencia"> <h1>Experiencia</h1>
          </NavLink></li>
          </ul>
      </nav>
      );
  }
}; export default Nav;


// <nav className='transparent'>
//           <div className="nav-wrapper transparent">
//                 <img className='nav-logo' src={rocket} alt={"logo cohete"} />
                
//                 <button type="button" className=" right navbar-toggle collapsed" data-toggle="collapse" data-target="#extra-nav" aria-expanded="false">
//                 <span className="sr-only">Toggle navigation</span>
//                 <span className="icon-bar"></span>
//                 <span className="icon-bar"></span>
//                 <span className="icon-bar"></span>
//               </button>
//             <ul 
//             id="nav-mobile" 
//             className="right hide-on-med-and-down" >
                  
                  
//                   <li>
//                     <p className="navbar-brand">
//                       <NavLink 
//                         to="/"> Biografía 
//                       </NavLink>
//                     </p> 
//                   </li>
                 
//                   <li>
//                     <p>
//                       <NavLink 
//                         to="/experiencia" > Experiencia
//                       </NavLink>
//                     </p> 
//                   </li>
                  
//                   <li>
//                     <p>
//                       <NavLink 
//                         to="/contacto" > Contacto
//                       </NavLink>
//                     </p> 
//                   </li>
                  
//             </ul>
//           </div>
//         </nav>