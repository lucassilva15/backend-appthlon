import { Router } from 'express';

import LoginController from './controllers/LoginController';
import HomeController from './controllers/HomeController';

const routes = new Router();

routes.post('/login', LoginController.index);
routes.get('/home', HomeController.index);
routes.get('/index', function(request, response) {
  response.render('views/index');
});

export default routes;
