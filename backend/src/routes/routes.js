import express from "express";
import { AuthenticateUser } from "../middlewares/AuthMiddleware";
import auth from "./auth";
import availability from "./availability";

const router = express.Router();

router.use("/auth", auth);
router.use("/availability", AuthenticateUser, availability);

export default router;
