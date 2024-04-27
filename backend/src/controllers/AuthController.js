import models from "../models/data-model";
import { ApiFailed } from "../utils/ApiResponse";

export const signup = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    let newUser = new models.User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      status: req.body.status || "active",
      create_date: req.body.create_date || new Date(),
    });
    await newUser.save();

    return res.status(201).json(ApiSuccess("Signup successfully", {}, 201));
  } catch (error) {
    return res.status(500).json(ApiFailed(error.message, {}, 500));
  }
};

export const login = async (req, res) => {
  try {
    const user = await models.User.find({ username: req.body.username });
    if (user && user.length > 0) {
      const isValidPassword = bcrypt.compare(
        req.body.password,
        user[0].password
      );
      if (isValidPassword) {
        const token = jwt.sign(
          {
            username: user[0].username,
            userId: user[0]._id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );
        return res.status(200).json(ApiSuccess("Login Successfully", {}, 200));
      } else {
        return res
          .status(401)
          .json(ApiFailed("Authentication failed", {}, 401));
      }
    } else {
      return res.status(401).json(ApiFailed("Authentication failed", {}, 401));
    }
  } catch (error) {
    return res.status(401).json(ApiFailed(error.message, {}, 401));
  }
};

export const logout = (req, res) => {
  res.json({
    statusCode: 200,
    message: "Logout successful",
    data: {},
  });
};
