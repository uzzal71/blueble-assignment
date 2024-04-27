import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import models from "../models/data-model/index";

export const singupService = async (data) => {
  try {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    let newUser = new models.User({
      name: data.name,
      email: data.email,
      password: hashedPassword,
      status: data.status || "active",
      create_date: data.create_date || new Date(),
    });

    await newUser.save();

    return {
      message: "Signup was successfully",
      data: {
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          status: newUser.status,
          create_date: newUser.create_date,
        },
      },
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const loginService = async (data) => {
  try {
    const user = await models.User.findOne({ email: data.email });

    if (user) {
      const isValidPassword = bcrypt.compare(data.password, user.password);

      if (isValidPassword) {
        // generate token
        const token = jwt.sign({ user: user }, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRATION,
        });

        return {
          message: "Login Successfully",
          data: {
            access_token: token,
            user: {
              id: user._id,
              name: user.name,
              email: user.email,
              status: user.status,
              create_date: user.create_date,
            },
          },
        };
      } else {
        throw new Error("Authentication failed");
      }
    } else {
      throw new Error("Authentication failed");
    }
  } catch (error) {
    throw new Error("Authentication failed");
  }
};
