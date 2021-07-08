const mongoose = require("mongoose");
const CONFIG = require('../configuracion/config')
module.exports={
    connnection: null,
    connect: function(){
        if(this.connnection) return this.connnection
        return mongoose.connect(CONFIG.BD).then(conexion=>{
            this.connnection = conexion;
            console.log('La conexion se realizo correctamente');
        }).catch (erro => console.log(erro));
    }
}