import { Express } from 'express';

import userRoutes from './users.router';

function routes(app: Express) {
  app.use('/users', userRoutes);
}

export default routes;
