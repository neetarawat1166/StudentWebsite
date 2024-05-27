import express from 'express'
// import { updatePost } from '../controller/updateController'
import { isAuthenticated } from '../middlewares/auth.js'
import { AddAnnouncement, TeacherUpdateData } from '../controller/TeacherUpdateController.js';
const router = express.Router();

// router.get("/")
// router.get("/getUpdatedata",isAuthenticated,TeacherUpdateData)

router.put("/updatedata", isAuthenticated, TeacherUpdateData)


// Add Announcement
router.post("/addannouncement", isAuthenticated, AddAnnouncement)

export default router;  