import express from 'express';
import { DBConnect } from './db/database.js';
import dotenv from 'dotenv';
import userRouter from './routes/userRouter.js';
import TeacherRouter from './routes/TeacherUpdateRouter.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import cron from 'node-cron';
import { DataScienceModel } from './models/DataScienceUpdateModel.js';

dotenv.config({ path: '.env' });
const app = express();

app.get('/', function (req, res) {
  res.send("India");
});

const corsOptions = {
  origin: ["http://localhost:5173"],
  methods: ["POST", "GET", "PUT", "DELETE"],
  credentials: true
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/v1", userRouter);
app.use("/api/v1", TeacherRouter);

DBConnect();

app.listen(5000, function (req, res) {
  console.log("Server running at 5000");
});


const formatDate = (date) => {
  const d = new Date(date);
  let day = d.getDate();
  let month = d.getMonth() + 1;
  const year = d.getFullYear();

  if (day < 10) {
    day = `0${day}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }

  return `${day}/${month}/${year}`;
};


cron.schedule('0 0 * * *', async () => {
  try {
    const today = formatDate(new Date());

    await DataScienceModel.updateMany(
      {},
      {
        $pull: {
          assignment: {
            dueDate: today
          }
        }
      }
    );

    console.log(`Expired assignments removed at ${new Date().toLocaleString()}`);
  } catch (error) {
    console.error(`Error while removing expired assignments: ${error.message}`);
  }
});
