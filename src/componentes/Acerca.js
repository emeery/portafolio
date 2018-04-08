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
            <p class="card-text"> Ingeniería en Computación.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        
        <div class="card">
          <div class="card-body">
          <center>
                <i className="fa fa-folder-open fa-5x" aria-hidden="true"></i>
          </center>
            <h5 class="card-title">Lenguajes</h5>
            <p class="card-text">JAVASCRIPT(ES6) . 
            REACT . 
            SASS . 
            MySQL . JEST. REDUX</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        
        <div  class="card">
          <div class="card-body">
          <center>
                  <i class="fa fa-flask fa-5x" aria-hidden="true"></i>
          </center>
            <h5 class="card-title">Herramientas</h5>
            <p class="card-text">This i</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
          
        

      
            
    </div>
        
          
        
        );
    }
}; export default Acerca;
 