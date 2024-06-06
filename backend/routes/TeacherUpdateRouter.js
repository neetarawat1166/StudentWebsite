import express from 'express';
import { isAuthenticated } from '../middlewares/auth.js';
import { AddAnnouncement, AddAssignment, TeacherUpdateData, fileController } from '../controller/TeacherUpdateController.js';
import multer from 'multer';
import cloudinary from 'cloudinary';
import axios from 'axios';

const router = express.Router();

// Configure Cloudinary
cloudinary.config({
    cloud_name: "dozb2zdev",
    api_key: "486964634753983",
    api_secret: "PJSeC9yqQvx_aE7mA2Jfbbh4oi4"
  });

// Multer configuration
let uploader = multer({
  storage: multer.diskStorage({}),
  limits: { fileSize: 5000000 }
});

// Routes
router.put("/updatedata", isAuthenticated, TeacherUpdateData);

// Add Announcement
router.post("/addannouncement", isAuthenticated, AddAnnouncement);

// Add Assignment
router.post("/addassignment", isAuthenticated, AddAssignment);

// Add file Route
router.post("/addfile", isAuthenticated, uploader.single("file"), fileController);


// Serve 
router.get('/servepdf', async (req, res) => {
  const { url } = req.query;
  try {
    
    const publicId = url.split('/').pop().split('.')[0];

    
    const signedUrl = cloudinary.v2.utils.private_download_url(publicId, 'pdf', { type: 'upload' });

    
    const response = await axios.get(signedUrl, { responseType: 'stream' });
    res.setHeader('Content-Type', 'application/pdf');
    response.data.pipe(res);
  } catch (error) {
    console.error('Error serving PDF:', error);
    res.status(500).send('Error serving PDF');
  }
});

export default router;
