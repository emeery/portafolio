import React from 'react';

class Acerca extends React.Component {
    state = {nombre:'Gerardo'}
    render() {
        return (
   
          
      <div class="card-deck">
      
          <div class="card">
          <div class="card-body">
          <center>
                <i className="fa fa-desktop fa-5x" aria-hidden="true"></i>
          </center>
            <h5 class="card-title">Estudios</h5>
            <p class="card-text"> 
            INGENIERIA EN COMPUTACION.</p>
            <p class="card-text"> 
            2011/2016.</p>

          </div>
          
        </div>
        
        <div class="card">
          <div class="card-body">
            <center>
                <i className="fa fa-folder-open fa-5x" aria-hidden="true"></i>
            </center>
            <h5 class="card-title"> Lenguajes</h5>
            <p class="card-text"> 
             JAVASCRIPT (<span>ES6</span>)  - SASS - 
            </p>
            
            <p class="card-text"> 
            REACT (<span>REDUX, WEBPACK, JEST</span>)
            </p>

            <p class="card-text"> 
            MySQL - NoSQL
            </p>
          
          </div>
          
        </div>
        
        <div  class="card">
          <div class="card-body">
          <center>
                  <i class="fa fa-flask fa-5x" aria-hidden="true"></i>
          </center>
            <h5 class="card-title">Herramientas</h5>
            <p class="card-text">GIT, BASH, HEROKU</p>
          </div>
          
        </div>
          
        

      
            
    </div>
        
          
        
        );
    }
}; export default Acerca;
 