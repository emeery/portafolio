import React from 'react';
import {
BrowserRouter, Switch, Route, Link, NavLink} from 'react-router-dom';
import Cabecera from '../componentes/Cabecera';
import Perfil from '../componentes/Perfil';
import PaginaNoEncontrada from '../componentes/PaginaNoEncontrada';
import Colores from '../componentes/Colores';
import Clima from '../componentes/Clima';

const AppRouter = () => (
    <BrowserRouter>
    <div >
            <Cabecera 
            subtitulo='historia curricular.'
            />
        
        <Switch>
            <Route path="/" component={Perfil} exact={true} />
            <Route path="/pronostico" component={Clima} />
            <Route path="/contacto" component={Colores} />
            <Route component={PaginaNoEncontrada} />
        </Switch>
    </div>
    </BrowserRouter>
); 
export default AppRouter;

// <Route path="/portafolio" component={Portafolio} exact={true} />
// <Route path="/portafolio/:id" component={PortafolioItem}/>