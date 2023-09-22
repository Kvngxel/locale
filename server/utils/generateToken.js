import jwt from "jsonwebtoken";
const secretKey = process.env.JWT_SECRET;

const generateToken = (payload) => {
  // Sign the JWT using the payload and secret key
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });  // Token expires in 1 hour
};

const verifyToken = (token) => {
  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    // Token verification failed
    throw new Error('Token is not valid');
  }
};
export {generateToken, verifyToken};
