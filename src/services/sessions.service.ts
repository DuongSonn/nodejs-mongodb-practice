import { Session } from '@/models';

export const sessionsService = {
    createSession: async (userId: string, userAgent: string) => {
        const session = await Session.create({
            user_id: userId,
            user_agent: userAgent,
        });

        return session.toJSON();
    },
};
