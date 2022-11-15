//! semejante a un import en react se usa require
const express = require('express')

//!esta es una importacion de archivo
//const file = require('./package.json')

//? localhost:9000/hola  api/v1/users/25  (puerto 9000 del protocolo TCP/IP)

const port=9000         //!puerto a ser utilizado
const app = express()  //!servidor inicilizado

app.get('/hola', (peticion, respuesta) => {    //? Peticion: informacion de lo que se esta solicitando
    respuesta.json({
        message:'Hola mundo'
    })

app.delete('/hola',  (peticion, respuesta) => {
    respuesta.json ({
        message: 'Hola pero desde delete'
    })
})
    
})


//! Este listen, va a estr siempre abajo de nuestro app.js
app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})