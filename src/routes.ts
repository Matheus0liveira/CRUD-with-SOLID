import { Router } from 'express';
import { createUserController } from './useCases/CreateUser';
import { deleteUserController } from './useCases/deleteUser';
import { listUserController } from './useCases/listUsers';

const routes = Router();

routes.post('/users/create', (request, response) => {
  return createUserController.handle(request, response);
});

routes.delete('/users/delete/:id', (request, response) => {
  return deleteUserController.handle(request, response);
});

routes.get('/users/list', (request, response) => {
  return listUserController.handle(request, response);
});

export default routes;