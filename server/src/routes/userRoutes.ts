import { authUser, registerUser,checkMiddleware } from "../controllers/userController";
import authenticateToken from "../middleware/authMiddlware";

const express = require('express');
const user= express.Router();


user.post("/signup",registerUser)
user.post("/login",authUser)

user.get("/dashboard",authenticateToken,checkMiddleware)

export default user;