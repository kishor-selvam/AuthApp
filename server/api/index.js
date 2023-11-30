import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRoutes from "../api/routes/user.route.js";
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

app.listen(3000, () => {
  console.log("Server listening on port 3000!!!");
});

app.get("/", (req, res) => {
  res.json({
    message: "Api is Working",
  });
});

app.use("/api/user", UserRoutes);
