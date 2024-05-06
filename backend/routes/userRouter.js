import express from 'express';
import {Login, Logout, Signup, getStudents, getUser } from '../controller/userController.js';
import { isAuthenticated } from '../middlewares/auth.js';
const router = express.Router();

router.post("/signup",Signup)

// Login Route
router.post("/login", Login)

// Logout Route
router.get("/logout", isAuthenticated , Logout)

//hetstudents
router.get("/students", getStudents);

// getUser
router.get("/getuser", isAuthenticated , getUser)
export default router;