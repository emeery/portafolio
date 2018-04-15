import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/colorReducer';
import thunk from 'redux-thunk';  
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// reducer general
export default () => {
    const tienda = createStore(
        reducers, applyMiddleware(thunk));
    return tienda;
}