import React from 'react';

class Experiencia extends React.Component {
     render() {
        return (
<div className="card-deck">
    
        <div className="card">
        <div className="card-body">
                <center>
                  <i className="fa fa-folder-open fa-5x" 
                  aria-hidden="true"></i>
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
                    <i className="fa fa-flask fa-5x" 
                    aria-hidden="true"></i>
                  </center>
            <h5 className="card-title"> Herramientas</h5>
            <p className="card-text">GIT, BASH, HEROKU, VS CODE</p>
            <p className="card-text">INGLÉS : TÉCNICO</p>
            
        </div>
        </div>
  
  
        <div className="card">
        <div className="card-body">
                  <center>
                  <i class="fa fa-code fa-5x"></i>
                  </center>
            <h5 className="card-title"> Proyectos </h5>
            <p className="card-text">BUSCADOR YOUTUBE CON API</p>
            <center>
            <a 
            style={{color:'lightblue'}}
            href="https://buscador123.herokuapp.com/" 
            target="_blank"
            className="card-text">Buscador </a>
            </center>
        </div>
        </div>
      
    </div> 
        );
    }
}; export default Experiencia;
 

