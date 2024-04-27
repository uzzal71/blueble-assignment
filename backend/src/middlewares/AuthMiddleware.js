import jwt from "jsonwebtoken";

export const AuthenticateUser = (req, res, next) => {
  const { authorization } = req.headers;

  try {
    if (authorization) {
      const token = authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      const { user } = decode;
      req.user = user;
      next();
    }
    throw new Error(401);
  } catch (error) {
    next(error);
  }
};
