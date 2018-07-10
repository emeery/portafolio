import axios from 'axios';
//
export function cargaColor() {
    const URL = '//www.colr.org/json/color/random';
    return(dispatch)=>{
        return axios.get(URL)
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