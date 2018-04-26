import React from 'react';

class ContactoBoton extends React.Component {
    render() {
        return(<div >
            

            <div >
            <center>
                    <div className='envoltura-boton'></div>
                    <button
                    className='boton-color'
                    style={{backgroundColor:`${this.props.color}`}}
                    onClick={()=>{this.props.handleClick() }} 
                    type="button" >
                    
                    <p className="card-text-correo"> 
            gerardobautista40<span>@</span>outlook.com.</p></button>
                </center>
            </div>
                
            
        </div>
        );
    }
}; export default ContactoBoton;

