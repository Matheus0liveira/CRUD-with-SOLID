import { Router } from 'express';

const routes = Router();

routes.get('/list', (request, response) => {
  return response.json({ok: true});
});

export default routes;