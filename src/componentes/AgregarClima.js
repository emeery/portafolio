import React from 'react'
import ClimaInfo from '../componentes/ClimaInfo';
import basedatos from '../firebase/firebase';
const API_KEY = "a3de5cffde10c377d199699b3da6fc6f";

class AgregaClima extends React.Component {
    state = {
        temperatura:undefined, 
        ciudad:undefined,   
        pais:undefined, 
        humedad:undefined, 
        descripcion:undefined, 
        climas: []
    }
    // componentDidMount() {
    //     try {
    //         const json = localStorage.getItem('climas');
    //         const opciones = JSON.parse(json);
    //         if(climas) { this.setState(()=>({
    //             climas })); 
    //         } 
    //         } catch (e) { }
    // }
    obtieneClima = (e) => { e.preventDefault();
        
        const ciudad = e.target.elements.ciudad.value.trim();
        const pais = e.target.elements.pais.value.trim();
        
        fetch(`//api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${API_KEY}&units=metric`)
        .then( res => {
            return res.json();
        }).then( dato => {
            
            console.log(dato);
            this.setState({
                temperatura: dato.main.temp,
                ciudad: dato.name,
                pais: dato.sys.country,
                humedad: dato.main.humidity,
                descripcion: dato.weather[0].description
            });
        })
    }
    
    render() {
        return(<div className='contenedor__agregar-clima'>
            <form onSubmit={this.obtieneClima}>
                 <input
                 size='10' 
                 type='text'
                 name='ciudad'
                 placeholder='Tu Ciudad'
                 >
                 </input>
                 <input 
                 type='text'
                 name='pais'
                 placeholder='Tu Pais'
                 >
                 </input>
                 <button>get pronostico</button>
                 <ClimaInfo
                 temperatura={this.state.temperatura}
                 />
             </form>
         </div>);
    }
    
}; export default AgregaClima;