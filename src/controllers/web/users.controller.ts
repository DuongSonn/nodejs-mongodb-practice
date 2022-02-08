import { Request, Response } from 'express';

import { CreateUserInput } from '@/schemas/user.schema';
import { userService } from '@/services';
import logger from '@/utils/logger';

export const userController = {
    createUserHandler: async (
        req: Request<{}, {}, CreateUserInput['body']>,
        res: Response,
    ) => {
        try {
            const user = await userService.createUser(req.body);

            return res.status(201).send(user);
        } catch (e: any) {
            logger.error(e);
            return res.status(409).send(e.message);
        }
    },
};
