
import { Request, Response } from "express";
import { db } from "../utils/db.server";
import generateToken from "../config/generateToken";

const bcrypt = require("bcrypt");
type User = {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
};

//Register User Api
const registerUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, username, password } = req.body;
    if (!firstName || !lastName || !username || !password) {
      res.status(400);
      throw new Error("Fileds cannot be empty");
    }

    const userExists = await db.user.findUnique({
      where: { username },
    });

    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 9);

    const newuser = await db.user.create({
      data: {
        firstName,
        lastName,
        username,
        password: hashedPassword,
      },
    });
    if (newuser) {
      res.status(201).json({
        id: newuser.id,
        firstName: newuser.firstName,
        lastName: newuser.lastName,
        username: newuser.username,
      });
    } else {
      res.status(400);
      throw new Error("Failed to create user");
    }
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

//Login Api
const authUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await db.user.findUnique({ where: { username } });
    // console.log("1", user);

    if (!user) {
      return res.status(401).json({ error: "Invalid username" });
    }

    const passwordmatch = await bcrypt.compare(password, user.password);

    if (!passwordmatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    if (passwordmatch) {
     res.status(201).json({
        id: user.id,
        username: user.username,
        token: generateToken(user.id),
      });
    }
  } catch (err) {
    return res.status(400).json({ error: err });
  }
}


const checkMiddleware = (req: Request, res: Response) => {
  res.send("Welcome authuroized user!");
};

export { registerUser, authUser, checkMiddleware };
