import express from "express";
import { test, updateUser, deleteuser } from "../controller/user.controller.js";
import { verifyToken } from "../util/verifyUser.js";

const router = express.Router();

router.get("/", test);
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteuser);
export default router;
