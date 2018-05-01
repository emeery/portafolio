import React from 'react';

class Promesa extends React.Component {
    constructor(props){
    super(props);
    this.state = { 
          nombre: '', 
          apellido:'', 
          correo:'' 
    }}
    MayusculaPrimera(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    render() {
      const { nombre, apellido, correo } = this.state;
      
      return(
        <div>
            <div>
            <h2>nombre: {this.MayusculaPrimera(nombre)} </h2>
            <h2>apellido: {this.MayusculaPrimera(apellido)}</h2>
            <h3>correo: {correo}</h3>
            </div>
          
          <button
            onClick={this.obtenerNombreAleatorio}
          >
            nombres
          </button>
        </div>
      );
    }
    
    
    obtenerNombreAleatorio = () => {
      fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
          const person = data.results[0];
          //this.unaMayuscula(person);
          this.setState({ 
                nombre: person.name.first, 
                apellido: person.name.last,
                correo: person.email
            })
        })
    }
  }
  export default Promesa;