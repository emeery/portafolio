// import axios from 'axios';

// export function obtieneClima () { 
//     return(dispatch)
//     return axios.get(`//api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${API_KEY}&units=metric`)
// }

// export const cambiaClima = (clima) => ({
//     type: 'CAMBIA_CLIMA',
//     payload: req 
// });

// export function obtieneClima () { 
    
//     const req = fetch(
//         `//api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${API_KEY}&units=metric`)
//     .then( res => {
//         return res.json();
//     }).then( dato => {
//         console.log(dato);
//         this.setState({
//             temperatura: dato.main.temp,
//             ciudad: dato.name,
//             pais: dato.sys.country,
//             humedad: dato.main.humidity,
//             descripcion: dato.weather[0].description
//         });
//     })
// }