import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET_KEY || "default_secret_key";

export const generateToken = (user) => {
  const payload = {
    userId: user._id,
    email: user.email,
  };
  const options = {
    expiresIn: "24h",
  };
  return jwt.sign(payload, secretKey, options);
};

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    console.error(error);
    return null;
  }
};
