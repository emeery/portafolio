import React from 'react';
import AcercaPersona from './AcercaPersona';
class Acerca extends React.Component {
    state= {direccion: 'Eduardo Molina 7725 Col. Unidad Habitacional Morelos I.',
            movil: 5573301558,
            estadoCivil: 'Soltero'
    }
    render() {
        return (
          
      <div >
          <div>
          <AcercaPersona
              nombre='Gerardo Manuel Bautista'
              direccion={this.state.direccion}
              movil={this.state.estadoCivil}
          />
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
             JAVASCRIPT (<span>ES6</span>)  - SASS - 
            </p>
            
            <p className="card-text"> 
            REACT (<span>REDUX, WEBPACK, JEST</span>)
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
            <p className="card-text">GIT, BASH, HEROKU</p>
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
}; export default Acerca;
 