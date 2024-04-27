import express from "express";

import {
  createAvailability,
  deleteAvailability,
  getAllAvailability,
  getAvailability,
  updateAvailability,
} from "../../controllers/AvailabilityController";

const router = express.Router();

router.post("/add", createAvailability);
router.get("/all", getAllAvailability);
router.get("/edit/:id", getAvailability);
router.put("/update/:id", updateAvailability);
router.delete("/delete", deleteAvailability);

export default router;
