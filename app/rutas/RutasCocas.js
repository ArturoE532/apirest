const express = require('express');
const ControladorCocas = require('../controlador/ControladorCocas')

const Router = express.Router();

Router  .get('/',ControladorCocas.index)
        .post('/',ControladorCocas.crear)
        .get('/:key/:value',ControladorCocas.buscar,ControladorCocas.mostrar)
        .put('/:key/:value',ControladorCocas.buscar,ControladorCocas.actualizar)
        .delete('/:key/:value',ControladorCocas.buscar,ControladorCocas.eliminar);

module.exports = Router;