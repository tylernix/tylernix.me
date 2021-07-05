import { magic } from '../../../lib/magic'
import { setLoginSession } from '../../../lib/session'

export default async function login(req, res) {
  try {
    const did = req.headers.authorization.split('Bearer').pop().trim();
    const metadata = await magic.users.getMetadataByToken(did);
    const session = { ...metadata }

    await setLoginSession(res, session)

    return res.status(200).send({ done: true })
  } catch (error) {
    return res.status(error.status || 500).end(error.message)
  }
}
