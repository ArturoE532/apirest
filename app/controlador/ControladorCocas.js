const { Mongoose } = require('mongoose');
const ModeloCocas = require('../modelos/ModeloCocas');

function index(req, res) {
    console.log('ok');
    ModeloCocas.find({})
    .then(cocas => {
        if (cocas.length) return res.status(200).send({cocas});
        return res.status(204).send({message: 'No hay hay merca'})
    }).catch(error => res.status(500).send({error}));
}

function crear(req, res) {
    new ModeloCocas(req.body).save()
    .then(cocas => res.status(200).send({cocas}))
    .catch(error => res.status(500).send({error}));
}

function buscar(req,res,next) {
    let consulta = {};
    consulta[req.params.key] = req.params.value;
    ModeloCocas.find(consulta).then(cocas => {
        if(!cocas.length) return next();
        req.body.cocas = cocas;
        return next();
    }).catch(error => {req.body.error = error;
        next();
        })
}

function mostrar(req,res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.cocas) return res.status(404).send({message: "No se encontro el producto"});
    let cocas = req.body.cocas;
    return res.status(200).send({cocas});
}

function actualizar(req,res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.cocas) return res.status(404).send({message: "No se puede actullizar"});
    let cocasOBJ = req.body.cocas[0];
    cocasOBJ = Object.assign(cocasOBJ,req.body);
    cocasOBJ.save().then(cocasAlta => {
        res.status(200).send({message: "El registro se actualizo correctamente",cocasAlta});
    }).catch(error => res.status(500).send({error}));
}

function eliminar(req,res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.cocas) return res.status(404).send({message: "No se puede eliminar"});
    req.body.cocas[0].remove().then(cocasEliminar => {
        res.status(200).send({message: "El registro se elimino correctamente",cocasEliminar});
    }).catch(error => res.status(500).send({error}));
    
}

module.exports={
    index,
    crear,
    buscar,
    mostrar,
    actualizar,
    eliminar
}