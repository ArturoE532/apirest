const express = require('express');
const RutasVinos = require('./rutas/RutasVinos')
const RutasCocas = require('./rutas/RutasCocas')

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/vinos',RutasVinos);
app.use('/cocas',RutasCocas);

module.exports = app;