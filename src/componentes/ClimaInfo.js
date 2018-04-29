import React from 'react'

const ClimaInfo = (props) => {
    return(<div className='contenedor__clima-info'>
            {props.temperatura && <p>
                la temperatura en tu ciudad es 
                {props.temperatura} ℃ </p>}
            
        </div>);
}; export default ClimaInfo;