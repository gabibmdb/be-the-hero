const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//desacoplando o módulo de rotas do express em uma nova variável 'routes'
const routes = express.Router();


//Rota de sessão
routes.post('/sessions', SessionController.create);

//Rota Ongs LIST
 routes.get('/ongs', OngController.index);
//Rota Ongs CREATE
routes.post('/ongs', OngController.create);

//Rota Profile LIST
routes.get('/profile', ProfileController.index);

//Rota Incidents LIST
routes.get('/incidents', IncidentController.index);
//Rota Incidents CREATE
routes.post('/incidents', IncidentController.create);
//Rota Incidents DELETE
routes.delete('/incidents/:id', IncidentController.delete);

//para exportar o módulo routes em index.js
module.exports = routes;