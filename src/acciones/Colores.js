import axios from 'axios'

export function cargaColor () {
   return(dispatch) => {
       return axios.get("http://www.colr.org/json/color/random"),
       then((response)=>{
            dispatch(cambiaColor('#'+response.data.new_color))
       })
   }  
}
// switch(action.type) {}
export function cambiaColor (color) {
    return{
        type: 'CAMBIA_COLOR',
        color
    }
};