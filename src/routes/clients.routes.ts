import { Router } from 'express';
import { CreateClientController } from '../modules/clients/useCases/createClient/CreateClientController';

const clientRoutes = Router();

clientRoutes.post('/', new CreateClientController().handle)

export { clientRoutes }