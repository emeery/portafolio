import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configuraTienda from './tienda/configuraTienda';
import 'normalize.css/normalize.css';
import './estilos/styles.scss';
import './firebase/firebase';
import Promesa from './playground/Promesa';
import Plegable from './playground/Plegable';

const tienda = configuraTienda();

const jsx = (
    <Provider store={tienda} >
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));





