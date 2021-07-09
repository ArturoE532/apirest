const mongoose = require('mongoose');

const CocasShcema = new mongoose.Schema({
    codigo:{
        unique: true,
        type: String,
        required: true,
    },
    nombre:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    fecha:{
        type: Date,
        default: Date.now
    }
    
})

const Coca = mongoose.model('cocas', CocasShcema);

module.exports = Coca;