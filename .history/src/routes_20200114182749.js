const {Router} = require('express');
const axios = require('axios');

const routes = Router();

routes.post('/devs', async (req,res) => {
    const {github_username,techs} = req.body;
    const resp = await axios.get(`https://api.github.com/users/${github_username}`);
    const {name = login , avatar_url, bio} = resp.data;
    console.log(name,avatar_url,bio,github_username,techs);
return res.json({"message":"Hello Word"});
});

module.exports = routes;