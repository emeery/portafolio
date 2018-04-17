import React from 'react';
import PerfilPersona from './PerfilPersona';
class Perfil extends React.Component {
    
    state = { 
      nombre: 'GERARDO MANUEL BAUTISTA',
      edad: 27,
    }
   
    render() {
        return (
<div className="card-deck">
    <div className="card">
    
      <div className="card-body">
              <center>
              <i className="far fa-address-card fa-5x"></i>
              </center>
            <h5 className="card-title">Acerca</h5>
            <p className="card-text"> 
              {this.state.nombre} </p>
            <p className="card-text"> 
              INGENIERÍA EN COMPUTACIÓN.</p>
            <p className="card-text"> 
              UNAM - 2011/2016.</p>
      </div>
    </div>
  
    <div className="card">
      
      <div className="card-body">
              <center>
                <i className="fa fa-folder-open fa-5x" aria-hidden="true"></i>
              </center>
            <h5 className="card-title"> Lenguajes</h5>
            <p className="card-text"> 
              JAVASCRIPT (<span>ES6</span>) - JAVA - 
            </p>
      
            <p className="card-text"> 
              REACT(<span>REDUX, WEBPACK, SASS</span>)
            </p>

            <p className="card-text"> 
             MySQL - NoSQL
            </p>
    
      </div>
    </div>
  
  
    <div className="card">
      <div className="card-body">
                <center>
                  <i className="fa fa-flask fa-5x" aria-hidden="true"></i>
                </center>
          <h5 className="card-title"> Herramientas</h5>
          <p className="card-text">GIT, BASH, HEROKU, VS CODE</p>
          <center>
            <a  href="https://github.com/emeery/portafolio" target="_blank" aria-hidden="true">
            <i className="fab fa-github fa-3x"></i>
            </a>
          </center>
      </div>
    </div>
      
        
          
       </div> 
        );
    }
}; export default Perfil;
 

