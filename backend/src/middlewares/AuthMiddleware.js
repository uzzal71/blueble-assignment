import jwt from "jsonwebtoken";

export const AuthenticateUser = (req, res, next) => {
  const { authorization } = req.headers;

  try {
    if (authorization) {
      const token = authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      const { user } = decode;
      req.user = {
        id: user._id,
        name: user.name,
        email: user.email,
      };
      next();
    } else {
      throw new Error(401);
      next();
    }
  } catch (error) {
    next(error);
  }
};
