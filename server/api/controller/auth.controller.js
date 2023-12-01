import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    if ((username !== "" && email !== "", password !== "")) {
      const hashedPassword = bcryptjs.hashSync(password, 10);
      const newUser = new User({ username, email, password: hashedPassword });
      await newUser.save();
      res.status(201).json({ message: "User created successfully" });
    }
    return res.status(400).json({
      message: "please fill all the fiels",
    });
  } catch (err) {
    next(err);
  }
};
