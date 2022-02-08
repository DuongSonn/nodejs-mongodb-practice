import jwt from 'jsonwebtoken';
import config from 'config';
import 'dotenv/config';

const publicKey = config.get<string>('publicKey');
const privateKey = String(process.env.JWT_PRIVATE_KEY);

const jwtUtils = {
    signJwt: (object: object, options?: jwt.SignOptions) => {
        return jwt.sign(object, privateKey, {
            ...options,
            algorithm: 'RS256',
        });
    },
    verifyJwt(token: string) {
        try {
            const decoded = jwt.verify(token, publicKey);

            return {
                valid: true,
                expired: false,
                decoded,
            };
        } catch (e: any) {
            return {
                valid: false,
                expired: e.message === 'jwt expired',
                decoded: null,
            };
        }
    },
};

export default jwtUtils;
