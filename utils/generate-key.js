const crypto = require('crypto');

function generateKeyPair() {
  const privateKey = generateRandomString(64);
  const publicKey = generateRandomString(64);

  return {
    privateKey,
    publicKey
  };
}

function generateRandomString(length) {
  return crypto.randomBytes(length).toString('hex').slice(0, length);
}

function truncateKey(key, length) {
  return key.slice(0, length);
}

function truncateSecretKey(secretKey, length = 32) {
  return secretKey.slice(0, length);
}


function verifyKey(secretKey, publicKey) {
  const publicKeyBuffer = Buffer.from(publicKey);
  const truncatedSecret = truncateSecretKey(secretKey);
  return truncatedSecret === publicKeyBuffer.toString('hex').slice(0, 32);
}

module.exports = { generateKeyPair, verifyKey, truncateSecretKey, truncateKey };
