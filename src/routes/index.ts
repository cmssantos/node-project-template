import { Router } from 'express';

const routes = Router();

routes.get('/', (_, response) =>
  response.json({ message: 'Hello World teste teste tese' }),
);

export default routes;
