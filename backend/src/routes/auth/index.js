import express from "express";
import { login, logout, signup } from "../../controllers/AuthController";
import { HandleBodyRequest } from "../../middlewares/RequestValidationMiddleware";
import validators from "../../models/request-model";

const router = express.Router();

/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     tags:
 *      - Auth
 *     summary: Register a new user
 *     description: Register a new user with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Signup'
 *     responses:
 *       200:
 *         description: User registered successfully
 *       400:
 *         description: Invalid request body
 *       500:
 *         description: Internal server error
 */
router.post("/signup", HandleBodyRequest(validators.SignupValidation), signup);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags:
 *      - Auth
 *     summary: Login
 *     description: Login with the provided credentials
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Internal server error
 */
router.post("/login", HandleBodyRequest(validators.LoginValidation), login);

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     tags:
 *      - Auth
 *     summary: Logout
 *     description: Logout the currently authenticated user
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User logged out successfully
 *       500:
 *         description: Internal server error
 */
router.post("/logout", logout);

export default router;
