import express from "express";

import {
  createAvailability,
  deleteAvailability,
  getAllAvailability,
  getAvailability,
  updateAvailability,
} from "../../controllers/AvailabilityController";

import { HandleBodyRequest } from "../../middlewares/RequestValidationMiddleware";
import validators from "../../models/request-model";

const router = express.Router();

router.post(
  "/add",
  HandleBodyRequest(validators.CreateUpdateAvailabilityValidation),
  createAvailability
);
router.get("/all", getAllAvailability);
router.get("/edit/:id", getAvailability);
router.put("/update/:id", updateAvailability);
router.delete("/delete", deleteAvailability);

export default router;
