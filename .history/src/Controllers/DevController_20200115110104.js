const axios = require('axios');
const Dev = require('../models/Dev');
const parseStryngAsArray = require('../util/ParseStryngAsArray');

// Index, Show, store, update, destroy

module.exports = {
    async index(req,res){
        const devs = await Dev.find();
        return res.json(devs);
    },
    
    async store (req,res) {
    
        const {github_username,techs,latitude,longitude} = req.body;

        let dev = await Dev.findOne({github_username});
        
        if(!dev){
            const resp = await axios.get(`https://api.github.com/users/${github_username}`);
        
        const {name = login , avatar_url, bio} = resp.data;
        
        const techsArray = parseStryngAsArray(techs);
    
        const location = {
            type: 'Point',
            coordinates:[longitude,latitude]
        };
    
        dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location
        });
        }
        
        //console.log(name,avatar_url,bio,,techsArray);
        
        return res.json(dev);
    }
}