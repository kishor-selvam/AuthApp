import express from "express";
import { signIn, signUp } from "../controller/auth.controller.js";

const app = express.Router();

app.post("/signup", signUp);
app.post("/signin", signIn);

export default app;
