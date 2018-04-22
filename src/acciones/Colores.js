import axios from 'axios';

// cargaColor
export default (dispatch) => {
    fetch("//www.colr.org/json/color/random")
    .then( res => {
        dispatch(cambiaColor('#'+ response.data.new_color));
    })
    // return(dispatch)=>{
    //     return axios.get("//www.colr.org/json/color/random")
    //     .then((response, err)=>{
    //         dispatch(cambiaColor('#'+ response.data.new_color));
    //    }).catch((err) => {
    //     console.log('hubo error', err);
    //    });
    // }
}
// switch(action.type) {}
export const cambiaColor = (color) => ({
    type: 'CAMBIA_COLOR',
    color
});

export function cargaColor() {
    return(dispatch)=>{
        return axios.get("//www.colr.org/json/color/random")
        .then((response, err)=>{
            dispatch(cambiaColor('#'+ response.data.new_color));
       }).catch((err) => {
        console.log('hubo error', err);
       });
    }
}