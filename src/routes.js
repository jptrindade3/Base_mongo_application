const express = require('express');
const userController = require('./controllers/userController');
const userActivities = require('./controllers/userActivities');

const routes = express.Router(); //Desacopla o modulo de rotas do express

/*
Métodos HTTP
*GET -> Buscar uma informação no back
*POST -> Criar uma informação no back
*PUT -> Alterar uma informação no back
*DELETE -> Deletar uma informação no back
*/

routes.post('/register', userController.create);
routes.get('/register', userController.read);
routes.put('/register/:id', userController.update);
routes.delete('/register/:id', userController.delete);

routes.post('/activity', userActivities.create);
routes.get('/activity', userActivities.read);
routes.put('/activity/:id', userActivities.update);
routes.delete('/activity/:id', userActivities.delete);

module.exports = routes;