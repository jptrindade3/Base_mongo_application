const express = require('express');
const userController = require('./controllers/userController');

const routes = express.Router(); //Desacopla o modulo de rotas do express

/*
Métodos HTTP
*GET -> Buscar uma informação no back
*POST -> Criar uma informação no back
*PUT -> Alterar uma informação no back
*DELETE -> Deletar uma informação no back
*/

routes.post('/register', userController.create);
routes.delete('/register', userController.delete);
routes.get('/list', userController.list);


module.exports = routes;