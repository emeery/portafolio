const climaDefaultState = {
    temperatura:undefined, 
    ciudad:undefined, 
    pais:undefined, 
    humedad:undefined, 
    descripcion:undefined,
};
// colorReducer
export default (state=climaDefaultState,action)=>{
    switch(action.type) { 
        case 'CAMBIA_CLIMA':
        return {...state, clima: action.clima}
        default: return state;
    }
};