import React from 'react';
import PerfilPersona from './PerfilPersona';
class Perfil extends React.Component {
    
    state = { 
      nombre: 'Gerardo Manuel Bautista',
      edad: 27,
      
    }
   
    render() {
        return (
          
      <div >
          <div>
          
          </div>
          
          <div className="card">
          <div className="card-body">
          <center>
                <i className="fa fa-desktop fa-5x" aria-hidden="true"></i>
          </center>
            <h5 className="card-title">Estudios</h5>
            <p className="card-text"> 
            FES ARAGÓN (UNAM) </p>
            <p className="card-text"> 
            INGENIERÍA EN COMPUTACIÓN.</p>
            <p className="card-text"> 
            2011/2016.</p>

          </div>
          
        </div>
        
        <div className="card">
          <div className="card-body">
            <center>
                <i className="fa fa-folder-open fa-5x" aria-hidden="true"></i>
            </center>
            <h5 className="card-title"> Lenguajes</h5>
            <p className="card-text"> 
             JAVASCRIPT (<span>ES6</span>)  - SASS 
            </p>
            
            <p className="card-text"> 
            REACT (<span>REDUX, WEBPACK</span>)
            </p>

            <p className="card-text"> 
            MySQL - NoSQL
            </p>
          
          </div>
          
        </div>
        
        <div  className="card">
          <div className="card-body">
          <center>
                  <i className="fa fa-flask fa-5x" aria-hidden="true"></i>
          </center>
            <h5 className="card-title">Herramientas</h5>
            <p className="card-text">GIT, BASH, HEROKU, VS CODE</p>
          <center>
          <a  href="https://github.com/emeery/portafolio" target="_blank" aria-hidden="true">
          <i className="fab fa-github fa-2x"></i>
          </a>
            </center>

          </div>
          
        </div>
          
        

      
            
    </div>
        
          
        
        );
    }
}; export default Perfil;
 

// <PerfilPersona
//               nombre={this.state.nombre}
//               direccion={this.state.direccion}
//               edad={this.state.edad}
              
//           />