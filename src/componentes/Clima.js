import React from 'react';
import ClimaInfo
    from '../componentes/ClimaInfo';
import AgregarClima 
    from '../componentes/AgregarClima';



    class Clima extends React.Component {
        state = {error: 'un error' }
        
        render() {
        return(<div>
                <h1>El pronostico de hoy ?</h1>
                <AgregarClima
                onSubmit={this.obtieneClima}
                />
            </div>);
        }

    }
export default Clima;