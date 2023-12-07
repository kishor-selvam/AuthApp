import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRoutes from "./api/routes/user.route.js";
import AuthRoutes from "./api/routes/auth.route.js";
import cookieParser from 'cookie-parser';
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

app.use(cookieParser());

app.listen(5000, () => {
  console.log("Server listening on port 3000!!!");
});

app.get("/", (req, res) => {
  res.json({
    message: "Api is Working",
  });
});

app.use("/api/user", UserRoutes);
app.use("/api/auth", AuthRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
