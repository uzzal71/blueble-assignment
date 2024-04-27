import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

export default app;
