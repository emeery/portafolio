import React from 'react';

class Acerca extends React.Component {
    state = {nombre:'Gerardo'}
    render() {
        return (
   
          
      <div className="card-deck">
      
          <div className="card">
          <div className="card-body">
          <center>
                <i className="fa fa-desktop fa-5x" aria-hidden="true"></i>
          </center>
            <h5 className="card-title">Estudios</h5>
            <p className="card-text-email"> 
            gerardobautista40<span>@</span>outlook.com.</p>
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
          <a  href="https://github.com/emeery" target="_blank" aria-hidden="true">
          <i className="fab fa-github fa-2x"></i>
          </a>
            </center>

          </div>
          
        </div>
          
        

      
            
    </div>
        
          
        
        );
    }
}; export default Acerca;
 