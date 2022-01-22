import { DocumentDefinition } from 'mongoose';

import { User, IUser } from '../models';

export const userService = {
  createUser: async (
    input: DocumentDefinition<
      Omit<IUser, 'created_at' | 'updated_at' | 'comparePassword'>
    >,
  ) => {
    try {
      return await User.create(input);
    } catch (e: any) {
      throw new Error(e);
    }
  },
};
