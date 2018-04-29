import React from 'react';
class Biografia extends React.Component {
    
    state = { 
      nombre: 'GERARDO MANUEL BAUTISTA',
      edad: 27,
      estudios: 'INGENIERIO EN COMPUTACIÓN'
    }
   
    render() {
        return (
            
                <div className='biografia-contenedor'>
                
                   <p 
                    > Hola, mi nombre es </p>
                    
                    <div className='biografia__nombre' >
                    <center><h3>{this.state.nombre}</h3></center> </div>
                   
                         <p>& soy </p>
                   
                    <div className='biografia__estudios' >
                   <h4>{this.state.estudios}</h4> </div> 
                   
                   
                   <div className='biografia__años' >
                   <p> Tengo <span>{this.state.edad}</span>&nbsp;años, 
                   <span> PASANTE</span>  </p></div>
                   
                   
                    <hr/>
                   
                </div>
            
        );
    }
}; export default Biografia;
// <h5>Diseño WEB, Programación, Diseño Front-End, MYSQL, NoSQL</h5>