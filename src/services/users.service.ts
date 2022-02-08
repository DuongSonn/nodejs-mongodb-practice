import { DocumentDefinition } from 'mongoose';
import _ from 'lodash';

import { User, IUser } from '@/models';

export const userService = {
    createUser: async (
        input: DocumentDefinition<
            Omit<IUser, 'created_at' | 'updated_at' | 'comparePassword'>
        >,
    ) => {
        try {
            const user = await User.create(input);

            return _.omit(user.toJSON(), 'password');
        } catch (e: any) {
            throw new Error(e);
        }
    },

    validatePassword: async ({
        email,
        password,
    }: {
        email: string;
        password: string;
    }) => {
        const user = await User.findOne({
            email,
        });

        if (!user) {
            return false;
        }

        const isValid = await user.comparePassword(password);

        if (!isValid) {
            return false;
        }

        return _.omit(user.toJSON(), 'password');
    },
};
