const {Router} = require('express');
const DevController = require('./Controllers/DevController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

module.exports = routes;