import axios from 'axios'

export default async (req, res) => {
    if (req.method !== 'GET') return res.status(405).end()
    console.log("/login/callback " + req.method);
    const url = process.env.AUTH0_ISSUER_BASE_URL + "/oauth/token"
    axios.post(url, {
        grant_type: 'authorization_code',
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        code: req.query.code,
        scope: 'openid profile email',
        redirect_uri: 'http://localhost:3000/api/login/callback',
        state: 'random-state'
    }).then(response => {
        console.log(response.data);
    }).catch(error => {
        console.log(error);
    });
    return res.status(200).end();
  }