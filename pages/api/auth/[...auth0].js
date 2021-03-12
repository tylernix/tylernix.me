import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';
//import { loginHandler } from '@auth0/nextjs-auth0/dist/auth0-session';

// const getLoginState = (req, loginOptions) => {
//     return { basket_id: getBasketId(req) };
//   };

// const loginOptions = {
//     authorizationParams: [{
//         response_type: 'code',
//         scope: 'openid profile email',

//         // Additional parameters
//         acr_value: "tenant:test-tenant",
//         custom_param: "custom-value"
//     }],
//     getLoginState
// }

let returnTo = "http://localhost:3000/profile";

export default handleAuth({
    async loginHandler(req, res) {
        try {
            await handleLogin(req, res, { returnTo });
        } catch (error) {
            res.status(error.status || 500).end(error.message);
        }
    }
});