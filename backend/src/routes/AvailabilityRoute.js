import express from "express";

import {
  createAvailability,
  deleteAvailability,
  getAllAvailability,
  getAvailability,
  updateAvailability,
} from "../controllers/AvailabilityController";

const AvailabilityRoute = express.Router();

AvailabilityRoute.post("/add", createAvailability);
AvailabilityRoute.get("/all", getAllAvailability);
AvailabilityRoute.get("/edit/:id", getAvailability);
AvailabilityRoute.put("/update/:id", updateAvailability);
AvailabilityRoute.delete("/delete", deleteAvailability);

export default AvailabilityRoute;
