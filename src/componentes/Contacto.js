import React from 'react';

class Contacto extends React.Component {
    render() {
        return(<div 
            className='envoltura'>
            <div 
            style={{backgroundColor:`${this.props.color}`}}
            className='contacto-caja'>
                <center>
                    <button
                    onClick={()=>{this.props.handleClick() }} 
                    type="button" >
                    
                    Colores </button>
                </center>
            </div>
        </div>
        );
    }
}; export default Contacto;

