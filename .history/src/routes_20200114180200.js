const {Router} = require('express');

const routes = Router();

routes.post('/User',(req,res) => {
    console.log(req.body);
return res.json({"message":"Hello Word"});
});

module.exports = routes;