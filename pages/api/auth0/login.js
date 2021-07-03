import { magic } from '../../../lib/magic'
import { setLoginSession } from '../../../lib/session'
import axios from 'axios'

export default async function login(req, res) {
  console.log("/login " + req.method);
  try {
    
    // Send magic link email to user after email signup
    if (req.method == 'POST') {
      const url = process.env.AUTH0_ISSUER_BASE_URL + "/passwordless/start"
      axios.post(url, {
          client_id: process.env.AUTH0_CLIENT_ID,
          client_secret: process.env.AUTH0_CLIENT_SECRET,
          connection: 'email',
          email: req.body.email,
          send: 'link',
          authParams: {
              redirect_uri: process.env.AUTH0_BASE_URL + "/api/auth0/login",
              response_type: 'code', // ensures a code is returned in query string instead of hash url parameters (which don't get sent to the backend)
              state: 'random-state'
          }
      }).then(response => {
          console.log(response.data);
      }).catch(error => {
          console.log(error);
      });

      return res.status(200).end();
    }

    // Get id_token from Auth0 using issued code
    if (req.method == 'GET') {
      const url = process.env.AUTH0_ISSUER_BASE_URL + "/oauth/token"
      axios.post(url, {
          grant_type: 'authorization_code',
          client_id: process.env.AUTH0_CLIENT_ID,
          client_secret: process.env.AUTH0_CLIENT_SECRET,
          code: req.query.code,
          scope: 'openid profile email',
          redirect_uri: 'http://localhost:3000/api/auth0/login',
          state: 'random-state'
      }).then(async response => {
          console.log(response.data);
          // Should probably do some jwt validation here, but I don't have any data to hide for now, so...tomorrow
          await setLoginSession(res, response.data)
          res.writeHead(302, { Location: '/' })
          return res.status(200).end();
      }).catch(error => {
          console.log(error);
          res.writeHead(302, { Location: '/' })
          return res.status(500).end();
      });
    }
  } catch (error) {
    return res.status(error.status || 500).end(error.message)
  }
}
