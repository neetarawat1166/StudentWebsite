import express from 'express';
import {Login, Logout, Signup, Students, getUser } from '../controller/userController.js';
import { isAuthenticated } from '../middlewares/auth.js';
const router = express.Router();

router.post("/signup",Signup)

// Login Route
router.post("/login", Login)

// Logout Route
router.get("/logout", isAuthenticated , Logout)

//students details
router.post("/students", Students);

router.post("/dataadd", Students);  


//getstudents


// getUser
router.get("/getuser", isAuthenticated , getUser)
export default router;