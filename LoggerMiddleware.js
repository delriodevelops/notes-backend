const express = require('express');
const app = express();
let cont = 0;

const logger = app.use((req,res,next)=>{
    cont++
    console.log(`Petición: "${cont}"`)
    console.log(`Metodo "${req.method}"`)
    console.log(`Ruta: "${req.path}"`)
    console.log(`Respuesta: <<${res}>>`)
    console.log('_____________________')
    next();
})

module.exports = logger