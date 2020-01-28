const Dev = require('../models/Dev');

module.exports = {
    async index(req,res){
        // Busca todos os devs num raio de 10km
        // filtrar por tecnologias
        console.log(req.query);
        return res.json({devs:[]})
    }
}