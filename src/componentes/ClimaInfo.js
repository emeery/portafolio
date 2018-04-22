import React from 'react'

const ClimaInfo = (props) => {
    return(<div>
        <h2>Pronóstico para 
        {props.ciudad && <p>{props.ciudad}</p>}
        </h2>
            {props.temperatura && <p
                > la temperatura en tu ciudad es {props.temperatura} ℃ </p>}
            {props.humedad && <p
                >la humedad {props.humedad}</p>}
            {props.descripcion && <p
                >  descripcion:  {props.descripcion}</p>}

        </div>);
}; export default ClimaInfo;