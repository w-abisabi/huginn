const jwt = require('jsonwebtoken');
const cookie = require('cookie');

function createJwtCookie(userId, email) {
  const secretKey = `-----BEGIN RSA PRIVATE KEY-----\n${
    process.env.JWT_SECRET_KEY
  }\n-----END RSA PRIVATE KEY-----`;

  const token = jwt.sign({ userId, email }, secretKey, {
    algorithm: 'RS256',
    expiresIn: '100 days',
  });

  const jwtCookie = cookie.serialize('jwt', token, {
    secure: process.env.NETLIFY_DEV !== 'true',
    httpOnly: true,
    path: '/',
  });

  return jwtCookie;
}

function clearCookie() {
  return 'jwt=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
}

exports.createJwtCookie = createJwtCookie;
exports.clearCookie = clearCookie;
