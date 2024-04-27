import express from "express";
import { AuthenticateUser } from "../middlewares/AuthMiddleware";
import AuthRoute from "./AuthRoute";
import AvailabilityRoute from "./AvailabilityRoute";

const router = express.Router();

router.use("/auth", AuthRoute);
router.use("/availability", AuthenticateUser, AvailabilityRoute);

export default router;
