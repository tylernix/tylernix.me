import axios from 'axios'
import Iron from '@hapi/iron'
import CookieService from '../../lib/cookie'

export default (req, res) => {
    console.log("/login " + req.method);
    if (req.method == 'POST') {
        const url = process.env.AUTH0_ISSUER_BASE_URL + "/passwordless/start"
        axios.post(url, {
            client_id: process.env.AUTH0_CLIENT_ID,
            client_secret: process.env.AUTH0_CLIENT_SECRET,
            connection: 'email',
            email: req.body.email,
            send: 'link',
            authParams: {
                redirect_uri: process.env.AUTH0_BASE_URL + "/api/login",
                response_type: 'code',
                state: 'random-state'
            }
        }).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });

        return res.status(200).end();
    }
  
    if (req.method == 'GET') {
        const url = process.env.AUTH0_ISSUER_BASE_URL + "/oauth/token"
        axios.post(url, {
            grant_type: 'authorization_code',
            client_id: process.env.AUTH0_CLIENT_ID,
            client_secret: process.env.AUTH0_CLIENT_SECRET,
            code: req.query.code,
            scope: 'openid profile email',
            redirect_uri: 'http://localhost:3000/api/login',
            state: 'random-state'
        }).then(response => {
            console.log(response.data);
            const token = Iron.seal(response.data.id_token, process.env.AUTH0_SECRET, Iron.defaults);
            CookieService.setTokenCookie(res, token);
        }).catch(error => {
            console.log(error);
        });

        return res.status(200).end();
    }
    
  }