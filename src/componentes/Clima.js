import React from 'react';
import AgregarClima 
    from '../componentes/AgregarClima';

class Clima extends React.Component {
    
    render() {
      return(<div>
            <AgregarClima
            onSubmit={this.obtieneClima}
            />
        </div>);
    }

}; export default Clima;