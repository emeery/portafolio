import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyBcbfg7N_AWZT7dfasXtCU39KRtn4JHm4E",
    authDomain: "portafolio-9e994.firebaseapp.com",
    databaseURL: "https://portafolio-9e994.firebaseio.com",
    projectId: "portafolio-9e994",
    storageBucket: "portafolio-9e994.appspot.com",
    messagingSenderId: "944674516211"
  };
  firebase.initializeApp(config);

  
export const basedatos = firebase.database();

// const notas = [{
//     id: 'JSSHSHHsS',
//     ciudad: '',
//     pais: 'el ave emprendió el vuelo'
//   }, {
//     id: 'JHFGHS',
//     ciudad: '',
//     pais: 'el ave emprendió el vuelo'
//   }];

basedatos.ref().set({
    id: '1234567',
    ciudad: 'Ciudad de México',
    pais: 'Mexico'
});

// basedatos.ref().on('valor', (snapshot)=>{
//     const val = snapshot.val();
//     console.log(val);
// })


