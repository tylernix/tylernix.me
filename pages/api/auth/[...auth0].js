import { handleAuth, handleLogin, handleCallback } from '@auth0/nextjs-auth0';

let returnTo = "/profile";
const afterCallback = (req, res, session, state) => {
    if (!session.user.isAdmin) {
        throw new UnauthorizedError('User is not admin');
    }
    return session;
}

export default handleAuth({
    async login(req, res) {
        try {
            await handleLogin(req, res, { returnTo });
        } catch (error) {
            res.status(error.status || 500).end(error.message);
        }
    },
    async callback(req, res) {
        try {
            await handleCallback(req, res, { afterCallback });
        } catch (error) {
            res.status(error.status || 500).end(error.message);
        }
    }
});

