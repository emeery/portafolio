import React from 'react';
import PerfilPersona from './PerfilPersona';
class Experiencia extends React.Component {
    
    state = { 
      empresa: 'BBVA',
      posicion: 'ANALISTA/PROGRAMADOR, FRONT-END',
      periodo: 'JUNIO/17 - ENERO/2018'
    }
   
    render() {
        return (
<div className="card-deck">
    <div className="card">
    
      <div className="card-body">
              <center>
              <i className="far fa-building fa-5x"></i>
              </center>
            <h5 className="card-title">Ultimo Empleo</h5>
            <p className="card-text"> 
              {this.state.empresa} </p>
            <p className="card-text"> 
              {this.state.posicion}</p>
            <p className="card-text"> 
              {this.state.periodo}</p>
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
              REACT-JS(<span>REDUX, WEBPACK, SASS</span>)
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
}; export default Experiencia;
 

