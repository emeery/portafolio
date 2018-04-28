import React from 'react';
import {
BrowserRouter, Switch, Route, Link, NavLink} from 'react-router-dom';
import Cabecera from '../componentes/Cabecera';
import Nav from '../componentes/Nav';
import PaginaNoEncontrada from '../componentes/PaginaNoEncontrada';
import Contacto from '../componentes/Contacto';
import Clima from '../componentes/Clima';
import Experiencia from '../componentes/Experiencia';
import Biografia from '../componentes/Biografia';

const AppRouter = () => (
    
    <BrowserRouter>
    
    <div >
            
            <Cabecera 
            subtitulo='Bienvenido al sitio!'
            />
        <Switch>
            <Route path="/" component={Biografia} exact={true} />
            <Route path="/pronostico" component={Clima} />
            <Route path="/contacto" component={Contacto} />
            <Route path="/experiencia" component={Experiencia} />
            <Route component={PaginaNoEncontrada} />
        </Switch>
        
    </div>
    </BrowserRouter>
); 
export default AppRouter;



// <Route path="/portafolio/:id" component={PortafolioItem}/>