import express from "express";
import { signIn, signUp, google,signOut } from "../controller/auth.controller.js";

const app = express.Router();

app.post("/signup", signUp);
app.post("/signin", signIn);
app.post("/google", google);
app.get("/signout", signOut);

export default app;
