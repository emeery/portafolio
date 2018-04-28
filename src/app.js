import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configuraTienda from './tienda/configuraTienda';
import 'normalize.css/normalize.css';
import './estilos/styles.scss';



const tienda = configuraTienda();

const jsx = (
    <Provider store={tienda} >
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));





