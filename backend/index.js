// index.js
import express from 'express';
import { DBConnect } from './db/database.js';
import dotenv from 'dotenv';
import userRouter from './routes/userRouter.js';
import TeacherRouter from './routes/TeacherUpdateRouter.js'
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config({ path: '.env' });
const app = express();

app.get('/', function(req, res) {
    res.send("india");
});

const corsOptions ={
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}

// Middlewares
app.use(cors(corsOptions));
app.use(express.json()); // to support json
app.use(cookieParser())

// Routes
app.use("/api/v1", userRouter); // Use the router middleware for the /api/v1 route
app.use("/api/v1", TeacherRouter); // Use the router middleware for the /api/v1 route

DBConnect();

app.listen(5000, function(req, res) {
    console.log("Server running at 5000");
});

