import axios from 'axios'
import Iron from '@hapi/iron'
import CookieService from '../../lib/cookie'
import { Magic } from '@magic-sdk/admin'

let magic = new Magic(process.env.MAGIC_SECRET_KEY)

export default async (req, res) => {
    if (req.method !== 'POST') return res.status(405).end()

    // exchange the did from Magic for some user data
    const did = req.headers.authorization.split('Bearer').pop().trim()
    console.log(magic.token.getPublicAddress(did));
    const user = await new Magic(process.env.MAGIC_SECRET_KEY).users.getMetadataByToken(did)

    // Author a couple of cookies to persist a user's session
    const token = await Iron.seal(user, process.env.ENCRYPTION_SECRET, Iron.defaults)
    CookieService.setTokenCookie(res, token)

    res.end()
}