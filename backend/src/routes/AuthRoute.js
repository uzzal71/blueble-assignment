import express from "express";
import { login, logout, signup } from "../controllers/AuthController";
import { HandleBodyRequest } from "../middlewares/RequestValidationMiddleware";
import validators from "../models/request-model/index";

const AuthRoute = express.Router();

AuthRoute.post(
  "/signup",
  HandleBodyRequest(validators.SignupValidation),
  signup
);
AuthRoute.post("/login", HandleBodyRequest(validators.LoginValidation), login);
AuthRoute.post("/logout", logout);

export default AuthRoute;
