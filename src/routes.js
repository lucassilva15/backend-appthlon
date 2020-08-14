import { Router } from 'express';

import LoginController from './controllers/login';
import teamController from './controllers/teamController';

const routes = new Router();

routes.get('/login', LoginController.index);
routes.get('/myteam', teamController.index);

export default routes;