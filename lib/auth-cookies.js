import { serialize, parse } from 'cookie'

let tokenName;
if (process.env.PASSORDLESS_SERVICE == 'magic') {
  tokenName = 'magic-token'
}
else {
  tokenName = 'auth0-token'
}
  

export const MAX_AGE = 60 * 60 * 720 // 30 days

export function setTokenCookie(res, token) {
  const cookie = serialize(tokenName, token, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'lax',
  })

  res.setHeader('Set-Cookie', cookie)
}

export function removeTokenCookie(res) {
  const cookie = serialize(tokenName, '', {
    maxAge: -1,
    path: '/',
  })

  res.setHeader('Set-Cookie', cookie)
}

export function parseCookies(req) {
  // For API Routes we don't need to parse the cookies.
  if (req.cookies) return req.cookies

  // For pages we do need to parse the cookies.
  const cookie = req.headers?.cookie
  return parse(cookie || '')
}

export function getTokenCookie(req) {
  const cookies = parseCookies(req)
  return cookies[tokenName]
}
