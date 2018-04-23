const coloreducerDefaultState = {
    color: '#d3f8f7 '
};
// colorReducer
export default (state=coloreducerDefaultState,action)=>{
    switch(action.type) { 
        case 'CAMBIA_COLOR':
        return {...state, color: action.color}
        default: return state;
    }
};
