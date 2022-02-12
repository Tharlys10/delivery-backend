import { Router } from 'express';
import { AuthenticateClientController } from '../modules/account/useCases/authenticateClient/AuthenticateClientController';

const sessionRoutes = Router();

sessionRoutes.post('/client', new AuthenticateClientController().handle)

export { sessionRoutes }