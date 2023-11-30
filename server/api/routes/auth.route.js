import express from "express";
import { signUp } from "../controller/auth.controller.js";

const app = express.Router();

app.post("/signup", signUp);

export default app;
