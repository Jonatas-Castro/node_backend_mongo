const Dev = require('../models/Dev');
const parseStringAsArray = require('../util/ParseStringAsArray');

module.exports = {
    async index(req,res){
        // Busca todos os devs num raio de 10km
        // filtrar por tecnologias
        const {latitude,longitude,techs} = req.body;
        const techsArray = parseStringAsArray(techs);
        console.log(techsArray);
        return res.json({devs:[]})
    }
}