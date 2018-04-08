import React from 'react';
import {
BrowserRouter, Switch, Route, Link, NavLink} from 'react-router-dom';
import Cabecera from '../componentes/Cabecera';
import Acerca from '../componentes/Acerca';
import Portafolio from '../componentes/Portafolio';
import PortafolioItem from '../componentes/PortafolioItem' // COMPONENTE HIJO
import Contacto from '../componentes/Contacto';
import PaginaNoEncontrada from '../componentes/PaginaNoEncontrada';

const AppRouter = () => (
    <BrowserRouter>
    <div >
            <Cabecera 
            
            />
        
        <Switch>
            <Route path="/" component={Acerca} exact={true} />
            <Route path="/portafolio" component={Portafolio} exact={true} />
            <Route path="/portafolio/:id" component={PortafolioItem}/>
            <Route path="/contacto" component={Contacto} />
            <Route component={PaginaNoEncontrada} />
        </Switch>
    </div>
    </BrowserRouter>
); 
export default AppRouter;