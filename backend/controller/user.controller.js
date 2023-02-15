import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import UserModel from "../models/user.model.js";
dotenv.config();

// create a json web token for a authentication
function generateToken(user) {
  return jwt.sign(
    {
      userName: user.userName,
      password: user.password,
    },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
  );
}

class UserController {
  static async createUser(req, res) {
    try {
      const userName = req.body.userName;
      // check whether the user already exists
      const oldUser = await UserModel.findUser(userName);

      // If the data contains a user, return error
      if (oldUser != undefined)
        res.json({ message: "user name already exists" });
      else {
        // encrypt the user password
        const password = await bcrypt.hash(req.body.password, 7);
        // pass the userName and password to model
        const user = await UserModel.createUser(userName, password);

        const token = generateToken(user);

        res.json({
          message: "created successfully",
          userName: userName,
          token: token,
        });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async login(req, res) {
    try {
      const userName = req.body.userName;
      const password = req.body.password;

      // check whether the user exists
      const user = await UserModel.findUser(userName);

      // If the user variable is undefined, return error
      if (user == undefined) res.json({ message: "no such user" });
      else {
        // compare input password to user's password
        const match = await bcrypt.compare(password, user.password);

        // if password does not match each other, return error
        if (!match) res.json({ message: "wrong password" });
        else {
          const token = generateToken({
            userName: userName,
            password: password,
          });
          res.json({
            message: "login sucessful",
            userName: userName,
            token: token,
          });
        }
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default UserController;
