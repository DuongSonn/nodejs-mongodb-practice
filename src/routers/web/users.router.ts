import { Router } from 'express';

import { userController } from '@/controllers/web';
import validate from '@/middleware/validateResource';
import { userSchema } from '@/schemas';

const router = Router();
router.post(
    '/create',
    validate(userSchema.createUserSchema),
    userController.createUserHandler,
);

export default router;
