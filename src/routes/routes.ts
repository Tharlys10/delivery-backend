import { Router } from 'express';
import { clientRoutes } from './clients.routes';

const routes = Router();

routes.use('/clients', clientRoutes)

export { routes }