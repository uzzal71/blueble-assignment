import { loginService, singupService } from "../services/AuthService";
import { ApiFailed, ApiSuccess } from "../utils/ApiResponse";

export const signup = async (req, res) => {
  try {
    const response = await singupService(req.body);
    return res
      .status(201)
      .json(ApiSuccess(response.message, response.data, 201));
  } catch (error) {
    return res.status(400).json(ApiFailed(error.message, {}, 400));
  }
};

export const login = async (req, res) => {
  try {
    const response = await loginService(req.body);
    res.cookie("access_token", response.data.access_token, {
      maxAge: 900000,
      httpOnly: true,
    });
    res.cookie("isLoggedIn", true, { maxAge: 900000, httpOnly: true });
    res.cookie("user", response.data.user, { maxAge: 900000, httpOnly: true });
    return res
      .status(200)
      .json(ApiSuccess(response.message, response.data, 200));
  } catch (error) {
    return res.status(401).json(ApiFailed(error.message, {}, 401));
  }
};

export const logout = (req, res) => {
  res.cookie("access_token", "", {});
  res.cookie("isLoggedIn", false, {});
  res.cookie("user", {}, {});

  res.json({
    statusCode: 200,
    message: "Logout successful",
    data: {},
  });
};
