import { Router } from 'express';

import { sessionController } from '@/controllers/web';
import validate from '@/middleware/validateResource';
import { sessionSchema } from '@/schemas';

const router = Router();
router.post(
    '/create',
    validate(sessionSchema.createSessionSchema),
    sessionController.createSessionHandler,
);

export default router;
