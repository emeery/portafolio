import React from 'react'

const ClimaInfo = (props) => {
    return(<div>
            {props.temperatura && <div>
                <p>la temperatura en {props.ciudad}</p>
                <p>es de {props.temperatura} ℃ </p>
                <p>humedad: {props.humedad}</p>
                </div>}
            
        </div>);
}; export default ClimaInfo;