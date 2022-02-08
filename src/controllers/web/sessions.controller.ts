import { Request, Response } from 'express';
import config from 'config';

import { userService, sessionsService } from '@/services';
import jwtUtils from '@/utils/jwt.utils';

export const sessionController = {
    createSessionHandler: async (req: Request, res: Response) => {
        // Validate user password
        const user = await userService.validatePassword(req.body);

        if (!user) {
            return res.status(401).send('Invalid email or password');
        }

        // Create a new session
        const session = await sessionsService.createSession(
            user.id,
            req.get('user-agent') || '',
        );

        // Create an access token
        const accessToken = jwtUtils.signJwt(
            {
                ...user,
                session: session._id,
            },
            {
                expiresIn: config.get<string>('accessTokenTtl'), // 15 minutes
            },
        );

        // Create a refresh token
        const refreshToken = jwtUtils.signJwt(
            {
                ...user,
                session: session._id,
            },
            {
                expiresIn: config.get<string>('refreshTokenTtl'), // 15 minutes
            },
        );

        // Return access & refesh token
        return res.send({
            accessToken,
            refreshToken,
        });
    },
};
