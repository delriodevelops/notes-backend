const express = require('express');
const app = express();
let cont = 0;

const logger = app.use((req,res,next)=>{
    cont++
    console.log(`Petición: <<${cont}>>`)
    console.log(`Request: <<${req}>>`)
    console.log(`Metodo <<${req.method}>>`)
    console.log(`Ruta: <<${req.path}>>`)
    console.log(`Body: <<${req.body}>>`)
    console.log(`Respuesta: <<${res}>>`)
    console.log('________')
    next();
})

module.exports = logger