import mongoose, { Document, Schema } from 'mongoose';

import { IUser } from './users.model';

export interface ISession extends Document {
    user_id: IUser['_id'];
    valid: boolean;
    user_agent: string;
    created_at: Date;
    updated_at: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
}

const sessionSchema: Schema<ISession> = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
        },
        valid: {
            type: Boolean,
            default: true,
        },
        user_agent: {
            type: String,
        },
    },
    {
        timestamps: true,
    },
);

const Session = mongoose.model('Session', sessionSchema);

export default Session;
