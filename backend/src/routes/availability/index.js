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

router.post(
  "/add",
  HandleBodyRequest(validators.CreateUpdateAvailabilityValidation),
  createAvailability
);
router.get("/all", getAllAvailability);
router.get(
  "/edit/:id",
  HandleParamsValidation(validators.GetUpdateDeleteAvailabilityValication),
  getAvailability
);
router.put(
  "/update/:id",
  HandleParamsValidation(validators.GetUpdateDeleteAvailabilityValication),
  updateAvailability
);
router.delete(
  "/delete/:id",
  HandleParamsValidation(validators.GetUpdateDeleteAvailabilityValication),
  deleteAvailability
);

export default router;
