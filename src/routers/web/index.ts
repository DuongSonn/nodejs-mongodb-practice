import { Router } from 'express';

import userRoutes from './users.router';
import sessionRoutes from './sessions.router';

const router = Router();
router.use('/users', userRoutes);
router.use('/sessions', sessionRoutes);

export default router;
