import React from 'react'
import ClimaInfo from '../componentes/ClimaInfo';

const API_KEY = "a3de5cffde10c377d199699b3da6fc6f";

class AgregaClima extends React.Component {
    state = {
        temperatura:undefined, 
        ciudad:undefined, 
        pais:undefined, 
        humedad:undefined, 
        descripcion:undefined, 
        //error:undefined
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
                descripcion: dato.weather[0].description
            });
        })
    }

    render() {
        return(<div >
            <form onSubmit={this.obtieneClima}>
                
                 

                 <div className='clima-forma'>
                    <center>
                    <div className="md-form">
                        <input 
                        type="text"
                        name='ciudad' 
                        id="form1" 
                        className="form-control"
                        placeholder='Ciudad o Estado'
                        >
                        </input>
                    </div>

                    <div className="md-form">
                        <input 
                        type="text"
                        name='pais' 
                        id="form1" 
                        className="form-control"
                        placeholder='MX'
                        >
                    </input>
                    </div>
                    </center>

                    <button>PRONOSTICO</button>
                </div>
                
                 <ClimaInfo
                 temperatura={this.state.temperatura}
                 ciudad={this.state.ciudad}
                 pais={this.state.pais}
                 descripcion={this.state.descripcion}
                 humedad={this.state.humedad}
                 descripcion={this.state.descripcion}
                 />
             </form>
         </div>);
    }
    
}; export default AgregaClima;