import crypto from 'crypto'

// Code Verifier
const generateRandomString = (length) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.randomBytes(length);
    return Array.from(values).map(x => possible[x%possible.length]).join('');
  }
  
const codeVerifier  = generateRandomString(64);

// Code Challenge
const sha256 = async(plain) => {
    return crypto.createHash('sha256').update(plain).digest();
}

// Base64 representation of the digest
const base64encode = (input) => {
    return input.toString('base64')
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}

const hashed = await sha256(codeVerifier);
const codeChallenge = base64encode(hashed);

export default { codeChallenge, codeVerifier };