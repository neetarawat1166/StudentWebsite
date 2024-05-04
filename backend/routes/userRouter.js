import express from 'express';
import {Login, Logout, Signup, getUser } from '../controller/userController.js';
import { isAuthenticated } from '../middlewares/auth.js';
const router = express.Router();

router.post("/signup",Signup)

// Login Route
router.post("/login", Login)

// Logout Route
router.get("/logout", isAuthenticated , Logout)

// getUser
router.get("/getuser", isAuthenticated , getUser)
export default router;