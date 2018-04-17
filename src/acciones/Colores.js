import axios from 'axios';

export function cargaColor() {
    return(dispatch)=>{
        return axios.get("http://www.colr.org/json/color/random").then((response)=>{
            dispatch(cambiaColor('#'+response.data.new_color));
       }).then(() => {
           console.log('hubo error');
       }).catch(() => {
        console.log('hubo error');
       }) ;
    }
}
// switch(action.type) {}
export const cambiaColor = (color) => ({
    type: 'CAMBIA_COLOR',
    color
});