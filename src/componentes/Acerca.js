import React from 'react';

class Acerca extends React.Component {
    state = {nombre:'Gerardo'}
    render() {
        return (<div>

            <h1 className='acerca-pagina__titulo' > Acerca </h1>
            <div className='bio'>
                <div className="card-group">
                <div className="card">
                
                <center>
                <i className="fa fa-desktop fa-5x" aria-hidden="true"></i>
                </center>
                
                  <div className="card-block">
                    <h4 className="card-title">Acerca.</h4>
                    
                    <p className="card-text">INGENERIA EN COMPUTACIÓN,
                    (<span style={{color:'lightblue'}}>UNAM</span>), 2011/2016.</p>

                    <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                    
                    <hr className='hr-acerca'></hr>
                  </div>
                  
                </div>
                
                <div className="card">
                <center>
                <i className="fa fa-folder-open fa-5x" aria-hidden="true"></i>
                </center>
                  <div className="card-block">
                    <h4 className="card-title">Lenguajes.</h4>
                    <p className="card-text">JAVASCRIPT,SASS, REACT, MYSQL, MONGODB.</p>
                    <p className="card-text"><small className="text-muted">Last updated 7 mins ago</small></p>
                  </div>
                </div>
                
                <div className="card">
                <center>
                <i className="fa fa-envelope-o fa-5x" aria-hidden="true"></i>
                </center>
                  <div className="card-block">
                    <h4 className="card-title">Contacto.</h4>
                    <p className="card-text">gerardobautista40@outlook.com</p>
                    <p className="card-text"><small className="text-muted">Last updated 10 mins ago</small></p>
                  </div>
                </div>
                
            </div>
          </div>
        </div>
        
        );
    }
} export default Acerca;
 