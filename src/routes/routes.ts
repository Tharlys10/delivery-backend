import { Router } from 'express';
import { clientRoutes } from './clients.routes';
import { sessionRoutes } from './session.routes';

const routes = Router();

routes.use('/session', sessionRoutes);
routes.use('/clients', clientRoutes)

export { routes }