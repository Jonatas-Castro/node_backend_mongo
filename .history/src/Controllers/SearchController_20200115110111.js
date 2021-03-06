const Dev = require('../models/Dev');
const parseStryngAsArray = require('../util/ParseStryngAsArray');

module.exports = {
    async index(req,res){
        // Busca todos os devs num raio de 10km
        // filtrar por tecnologias
        const {latitude,longitude,techs} = req.body;
        const techsArray = parseStryngAsArray(techs);
        console.log(techsArray);
        return res.json({devs:[]})
    }
}