import express from "express";
import {
  Contact,
  Feedback,
  Login,
  Logout,
  Query,
  Signup,
  StudentAttendance,
  Students,
  getAnnouncement,
  getAssignment,
  getUser,
} from "../controller/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.post("/signup", Signup);

//Contact route
router.post("/contact",Contact);

//Qurey Route
router.post("/query",Query)

//Feedback route
router.post("/feedback",Feedback);

// Login Route
router.post("/login", Login);

// Logout Route
router.get("/logout", isAuthenticated, Logout);

//students details
router.post("/students", Students);

router.post("/dataadd", Students);

router.get("/announcement/:course", getAnnouncement);

router.get("/assignment/:course", getAssignment);

router.put("/attendance", isAuthenticated, StudentAttendance);

//getstudents

// getUser
router.get("/getuser", isAuthenticated, getUser);
export default router;
