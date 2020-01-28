const {Router} = require('express');
const axios = require('axios');

const routes = Router();

routes.post('/devs', async (req,res) => {
    const {github_username} = req.body;
    const resp = await axios.get(`https://api.github.com/users/${github_username}`);

    console.log(resp.data);
return res.json({"message":"Hello Word"});
});

module.exports = routes;