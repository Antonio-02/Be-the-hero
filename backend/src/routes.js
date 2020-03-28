const express = require('express');

const OngController = require('./controllers/OngControllers');

const IncidentControllers = require('./controllers/IncidentController');

const ProfileController = require('./controllers/ProfileController');

const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentControllers.create);
routes.get('/incidents', IncidentControllers.index);
routes.delete('/incidents/:id', IncidentControllers.delete);

module.exports = routes;