import { Express, Request, Response } from 'express';
import { userController } from '@/controllers/web';
import validate from '@/middleware/validateResource';
import { userSchema } from '@/schemas';

function routes(app: Express) {
    app.post('/create', validate(userSchema.createUserSchema), userController.createUserHandler);
}

export default routes