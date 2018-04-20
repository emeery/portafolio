import axios from 'axios';

export function cargaColor() {
    return(dispatch)=>{
        return axios.get("http://www.colr.org/json/color/random")
        .then((response, err)=>{
            dispatch(cambiaColor('#'+ response.data.new_color));
       }).catch((err) => {
        console.log('hubo error', err);
       });
    }
}
// switch(action.type) {}
export const cambiaColor = (color) => ({
    type: 'CAMBIA_COLOR',
    color
});