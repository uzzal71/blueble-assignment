import express from "express";

import {
  createAvailability,
  deleteAvailability,
  getAllAvailability,
  getAvailability,
  updateAvailability,
} from "../../controllers/AvailabilityController";

import {
  HandleBodyRequest,
  HandleParamsValidation,
} from "../../middlewares/RequestValidationMiddleware";
import validators from "../../models/request-model";

const router = express.Router();

/**
 * @swagger
 * /api/availability/add:
 *   post:
 *     tags:
 *      - Availability
 *     summary: Create a new availability
 *     description: Availability create with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Signup'
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Availability create successfully
 *       400:
 *         description: Invalid request body
 */
router.post(
  "/add",
  HandleBodyRequest(validators.CreateUpdateAvailabilityValidation),
  createAvailability
);

/**
 * @swagger
 * /api/availability/all:
 *   get:
 *     tags:
 *      - Availability
 *     summary: Gets availability
 *     description: Gets availability
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Get all availability
 *       400:
 *         description: Invalid request body
 */
router.get("/all", getAllAvailability);

/**
 * @swagger
 * /api/availability/edit/:id:
 *   get:
 *     tags:
 *      - Availability
 *     summary: Get availability
 *     description: Get availability
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Get availability
 *       400:
 *         description: Invalid request body
 */
router.get(
  "/edit/:id",
  HandleParamsValidation(validators.GetUpdateDeleteAvailabilityValication),
  getAvailability
);

/**
 * @swagger
 * /api/availability/update/:id:
 *   put:
 *     tags:
 *      - Availability
 *     summary: Update availability
 *     description: Update availability
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Signup'
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Update availability
 *       400:
 *         description: Invalid request body
 */
router.put(
  "/update/:id",
  HandleParamsValidation(validators.GetUpdateDeleteAvailabilityValication),
  updateAvailability
);

/**
 * @swagger
 * /api/availability/delete/:id:
 *   delete:
 *     tags:
 *      - Availability
 *     summary: Delete availability
 *     description: Delete availability
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Signup'
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Delete availability
 *       400:
 *         description: Invalid request body
 */
router.delete(
  "/delete/:id",
  HandleParamsValidation(validators.GetUpdateDeleteAvailabilityValication),
  deleteAvailability
);

export default router;
