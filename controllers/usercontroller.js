let usuarios = [{
    nombre:"jose", apellido: "romero", id:"23231", cargo:"gerente"
   },{
   nombre:"luis", apellido: "romero", id:"334534", cargo:"contabilidad"
   },{
   nombre:"nestor", apellido: "lopez", id:"756756", cargo:"ventas"
   }];

const { request } = require("express");

const getusuarios = (req, res) => {
    return res.json(usuarios);
}

const createusuario = (req, res) => {
    usuarios.push(req.body);
    return res.json(usuarios);
}
module.exports = {getusuarios, createusuario};