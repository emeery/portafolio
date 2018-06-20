import React from 'react';
import ClimaInfo from '../componentes/ClimaInfo';
//import basedatos from '../firebase/firebase';
const API_KEY = "a3de5cffde10c377d199699b3da6fc6f";

class AgregaClima extends React.Component {
    state = {
        temperatura:undefined, 
        ciudad:undefined,   
        pais:undefined, 
        humedad:undefined, 
        descripcion:undefined,
        correo:''
        // climas: []
    }
    

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
                descripcion: dato.weather[0].description,
            });
        })
    }
    
    render() {
        return (
        <div>
                    <center>
                    <form onSubmit={this.obtieneClima}>
                        <input
                        className='entrada-clima'
                        type='text'
                        name='ciudad'
                        placeholder='Mexico City'
                        style={{width:'200px',
                            height:'50px', fontSize:'2rem' }}
                        >
                        </input>
                        <input 
                        className='entrada-clima'
                        type='text'
                        name='pais'
                        placeholder='MX'
                        style={{width:'200px',
                            height:'50px', fontSize:'2rem' }}
                        >
                        </input>
                        <button>un pronostico</button>
                        <div><h2>{this.state.correo}</h2></div>
                    </form>
                    </center>
                    
                    
                <div>
                        <ClimaInfo
                        temperatura={this.state.temperatura}
                        ciudad={this.state.ciudad}
                        pais={this.state.pais}
                        humedad={this.state.humedad}
                        descripcion={this.state.descripcion}
                        />
                </div>
                <center>
                <a 
                    href="http://openweathermap.org/help/city_list.txt" 
                    target="_blank"
                > Lista de Ciudades en la API </a>
                </center>
         </div>);
    }
    
}; export default AgregaClima;