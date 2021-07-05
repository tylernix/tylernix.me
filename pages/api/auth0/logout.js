import { removeTokenCookie } from '../../../lib/auth-cookies'
import { getLoginSession } from '../../../lib/session'

export default async function logout(req, res) {
  try {
    const session = await getLoginSession(req);

    if (session) {
      removeTokenCookie(res);
    }
  } catch (error) {
    console.error(error);
  }

  res.writeHead(302, { Location: '/' });
  res.end();
}
