import express from "express";
import { login, logout, signup } from "../../controllers/AuthController";
import { AuthenticateUser } from "../../middlewares/AuthMiddleware";
import { HandleBodyRequest } from "../../middlewares/RequestValidationMiddleware";
import validators from "../../models/request-model";

const router = express.Router();

router.post("/signup", HandleBodyRequest(validators.SignupValidation), signup);
router.post("/login", HandleBodyRequest(validators.LoginValidation), login);
router.post("/logout", AuthenticateUser, logout);

export default router;
