import React from 'react';
class Biografia extends React.Component {
    
    state = { 
      nombre: 'GERARDO MANUEL BAUTISTA',
      edad: 27,
    }
   
    render() {
        return (
            <div className='biografia-contenedor-p'>
                <div className='biografia-contenedor'>
                
                   <p 
                    className='biografia__titulo' 
                    > Hola, mi nombre es <span
                    > {this.state.nombre} </span>
                   </p>
                   
                   <h3>
                   Soy <span>INGENIERO EN COMPUTACIÓN</span> de la ( <span
                    > FES-ARAGÓN  </span> )
                   </h3>
                   
                   <h4>Tengo <span
                   > {this.state.edad} </span
                   > años y resido como ( <span
                    >PASANTE</span> )</h4>
                    <hr/>
                   
                </div>
            </div>
        );
    }
}; export default Biografia;
// <h5>Diseño WEB, Programación, Diseño Front-End, MYSQL, NoSQL</h5>