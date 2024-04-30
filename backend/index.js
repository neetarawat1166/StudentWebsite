// index.js
import express from 'express';
import { DBConnect } from './db/database.js';
import dotenv from 'dotenv';
import router from './routes/userRouter.js';
import cors from 'cors';

dotenv.config({ path: '.env' });
const app = express();

app.get('/', function(req, res) {
    res.send("india");
});

app.use(cors());
app.use(express.json()); // to support json
app.use("/api/v1", router); // Use the router middleware for the /api/v1 route

DBConnect();

app.listen(5000, function(req, res) {
    console.log("Server running at 5000");
});
