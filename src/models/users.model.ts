import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import config from 'config';

export interface IUser extends Document {
    email: string;
    name: string;
    password: string;
    is_active?: boolean;
    created_at: Date;
    updated_at: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema: Schema<IUser> = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        is_active: {
            type: Boolean,
            required: false,
            default: true,
        },
    },
    {
        timestamps: true,
    },
);

userSchema.pre('save', async function (next: any) {
    const user = this as unknown as IUser;
    if (user && !user.isModified('password')) {
        return next();
    }

    const salt = await bcrypt.genSalt(config.get<number>('saltWorkFactor'));
    const hash = await bcrypt.hashSync(user.password, salt);

    user.password = hash;

    return next();
});

userSchema.methods.comparePassword = async function (
    candidatePassword: string,
): Promise<boolean> {
    const user = this as unknown as IUser;
    return bcrypt.compare(candidatePassword, user.password).catch(() => false);
};

const User = mongoose.model<IUser>('User', userSchema);

export default User;
