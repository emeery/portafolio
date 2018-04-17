import React from 'react';

class ColoresCaja extends React.Component {
    render() {
        return(<div 
            className='envoltura'>
            

            <div >
            <center>
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
}; export default ColoresCaja;

