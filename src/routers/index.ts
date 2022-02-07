import { Express, Request, Response } from 'express';

import webRoutes from './web';

function routes(app: Express) {
    app.get('/health-check', (req: Request, res: Response) =>
        res.sendStatus(200),
    );

    app.use('/api/web', webRoutes);
}

export default routes;
