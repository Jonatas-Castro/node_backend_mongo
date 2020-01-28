const Dev = require('../models/Dev');
const parsStryngAsArray = require('../util/ParseStryngAsArray');

module.exports = {
    async index(req,res){
        // Busca todos os devs num raio de 10km
        // filtrar por tecnologias
        const {latitude,longitude,techs} = req.body;
        const techsArray = parsStryngAsArray(techs);

        return res.json({devs:[]})
    }
}