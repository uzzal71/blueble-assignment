import jwt from "jsonwebtoken";
import models from "../models/data-model";

export const AuthenticateUser = async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    if (authorization) {
      const token = authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      const { user } = decode;
      const userData = await models.User.findById(user._id);
      if (!userData) throw new Error(401);
      if (userData.tokens.length === 0) throw new Error(401);
      req.user = {
        id: user._id,
        name: user.name,
        email: user.email,
        tokens: [{ token }],
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
