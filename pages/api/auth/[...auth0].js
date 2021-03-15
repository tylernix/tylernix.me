import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

let returnTo = "/profile";

export default handleAuth({
    async login(req, res) {
        try {
            await handleLogin(req, res, { returnTo });
        } catch (error) {
            res.status(error.status || 500).end(error.message);
        }
    }
});