import { authUser, registerUser } from "../controllers/userController";


const express = require('express');
const user= express.Router();


user.post("/signup",registerUser)
user.post("/login",authUser)

export default user;