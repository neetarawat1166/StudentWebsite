import { UserModel } from "../models/userModels.js";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import router from "../routes/userRouter.js";
import { sentToken } from "../utils/jwtauth.js";
import { FullStackModel } from "../models/FullStackUpdateModel.js";
import { DataScienceModel } from "../models/DataScienceUpdateModel.js";
import { IOTModel } from "../models/IOTUpdateModel.js";
import { DevOpsModel } from "../models/DevOpsUpdateModel.js";
import { ContactModel } from "../models/ContactUsModal.js";
import { QueryModel } from "../models/QueryModal.js";
import { FeedbackModel } from "../models/FeeddbackModel.js";

const JWT_SECURE = "thisisourjsonwebtokenandimfromindia";

export const Signup = async (req, res) => {
  const { profile, name, email, password, mobile, course } = req.body;

  if (!profile || !name || !email || !password || !mobile || !course) {
    return res.status(404).json({
      success: false,
      message: "Please fill all the form details",
    });
  }
  try {
    let user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "This Email Already Exists",
      });
    }

    const saltRound = 10;
    const hashedPass = await bcrypt.hash(password, saltRound);

    const userdata = await UserModel.create({
      profile,
      name,
      email,
      password: hashedPass,
      mobile,
      course,
    });

    res.status(200).json({
      success: true,
      message: "Signup successfully",
      user: userdata,
    });
  } catch (error) {
    console.error("Error in signup:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Login controller
export const Login = async (req, res) => {
  const { email, password, profile } = req.body;
  console.log(email, password, profile);

  try {
    const isEmail = await UserModel.findOne({ email });
    if (!isEmail) {
      return res.status(400).json({
        success: false,
        message: "Please Enter Valid Credentials",
      });
    }

    if (isEmail.profile !== profile) {
      console.log("err");
      return res.status(400).json({
        success: false,
        message: "Please Enter Valid Credentials",
      });
    }

    const compass = await bcrypt.compare(password, isEmail.password);

    if (!compass) {
      return res.status(400).json({
        success: false,
        message: "Please Enter Valid Credentials",
      });
    }
    sentToken(isEmail, res, 201, "Login Successfully");
  } catch (error) {
    console.log(error);
  }
};

// Logout Controller
export const Logout = (req, res) => {
  res.clearCookie("token").status(201).json({
    success: true,
    message: "Logout Successfully!",
  });
};

//get Students
export const Students = async (req, res) => {
  try {
    const { course } = req.body;

    // Query with both conditions
    const students = await UserModel.find({
      $and: [
        {
          course: course,
          profile: "Student",
        },
      ],
    });
   // console.log(course);

    let UpdateData = "";

    if (course == "Data Science & Machine Learning with AI") {
      UpdateData = await DataScienceModel.find();
      // console.log(UpdateData);
    }
    if (course == "Full Stack Web Development") {
      UpdateData = await FullStackModel.find();
      // console.log(UpdateData);
    }
    if (course == "Embedded Systems & Robotics with IOT") {
      UpdateData = await IOTModel.find();
      // console.log(UpdateData);
    }
    if (course == "Cloud Computing & DevOps") {
      UpdateData = await DevOpsModel.find();
      // console.log(UpdateData);
    }

    res.status(200).json({
      success: true,
      students,
      UpdateData,
    });
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Get User
export const getUser = (req, res) => {
  const user = req.user;

  res.status(201).json({
    success: true,
    message: "User Verify",
    user,
  });
};

export const getAnnouncement = async (req, res) => {
  try {
    const { course } = req.params;

    // Query with both conditions
    const students = await UserModel.find({
      $and: [
        {
          course: course,
          profile: "Student",
        },
      ],
    });
    // console.log(course);

    let UpdateData = "";

    if (course == "Data Science & Machine Learning with AI") {
      UpdateData = await DataScienceModel.find();
      // console.log(UpdateData);
    }
    if (course == "Full Stack Web Development") {
      UpdateData = await FullStackModel.find();
      // console.log(UpdateData);
    }
    if (course == "Embedded Systems & Robotics with IOT") {
      UpdateData = await IOTModel.find();
      // console.log(UpdateData);
    }
    if (course == "Cloud Computing & DevOps") {
      UpdateData = await DevOpsModel.find();
      // console.log(UpdateData);
    }

    const announcement = UpdateData[0].announcement;

    res.status(200).json({
      success: true,
      announcement,
    });
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};


export const getAssignment = async (req, res) => {
  try {
    const { course } = req.params;

    // Query with both conditions
    const students = await UserModel.find({
      $and: [
        {
          course: course,
          profile: "Student",
        },
      ],
    });
    // console.log(course);

    let UpdateData = "";

    if (course == "Data Science & Machine Learning with AI") {
      UpdateData = await DataScienceModel.find();
      // console.log(UpdateData);
    }
    if (course == "Full Stack Web Development") {
      UpdateData = await FullStackModel.find();
      // console.log(UpdateData);
    }
    if (course == "Embedded Systems & Robotics with IOT") {
      UpdateData = await IOTModel.find();
      // console.log(UpdateData);
    }
    if (course == "Cloud Computing & DevOps") {
      UpdateData = await DevOpsModel.find();
      // console.log(UpdateData);
    }

    const assignment = UpdateData[0].assignment;

    res.status(200).json({
      success: true,
      assignment,
    });
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};


export const Contact = async (req, res) => {
  const {  firstname, lastname, email, mobile,course,message } = req.body;

  if (!firstname || !lastname || !email || !message  || !mobile || !course) {
    return res.status(404).json({
      success: false,
      message: "Please fill all the form details",
    });
  }
  try {
    const userdata = await ContactModel.create({
      firstname,
      lastname,
      email,
      mobile,
      course,
      message 
    });

    console.log("userdatacreated",userdata);

    res.status(200).json({
      success: true,
      message: "Submitted successfully",
      user: userdata,
    });
  } catch (error) {
    console.error("Error in Submission:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


export const Query = async (req, res) => {
  const {  firstname, lastname, email,query} = req.body;

  if (!firstname || !lastname || !email || !query) {
    return res.status(404).json({
      success: false,
      message: "Please fill all the form details",
    });
  }
  try {
    const userdata = await QueryModel.create({
      firstname,
      lastname,
      email,
      query 
    });

    //console.log("userdatacreated",userdata);

    res.status(200).json({
      success: true,
      message: "Submitted successfully",
      user: userdata,
    });
  } catch (error) {
    console.error("Error in Submission:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


export const Feedback = async (req, res) => {
  const {  course,email,topic,selectedSubtopics,rating,comment} = req.body;
  // console.log("-------------",course)
  // console.log("-------------",email)
  // console.log("-------------",selectedSubtopics)
  // console.log("-------------",rating)
  if (!selectedSubtopics || !rating || !comment) {
    return res.status(404).json({
      success: false,
      message: "Please fill all the form details",
    });
  }
  
  const Existedemail = await FeedbackModel.findOne({email});
  const Existedtopic = await FeedbackModel.findOne({topic});
  if(Existedemail && Existedtopic){
    return res.status(404).json({
      success: false,
      message: "You have already filled",
    });
  }
  

  try {
    const userdata = await FeedbackModel.create({
      email,
      course,
      topic,
      selectedSubtopics,
      rating,
      comment
    });

    //console.log("userdatacreated",userdata);

    res.status(200).json({
      success: true,
      message: "Submitted successfully",
      user: userdata,
    });
  } catch (error) {
    console.error("Error in Submission:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


// Student Attendance
export const StudentAttendance = async (req, res) => {

  const user = req.user;

  try {
    const AttendedStudents = req.body;
    // console.log("Updated Student:- ", AttendedStudents)

    for (const student of AttendedStudents) {
      await UserModel.findByIdAndUpdate(student._id, { attendance: student.attendance }, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
    }

    if (user.course == "Data Science & Machine Learning with AI") {
      const data = await DataScienceModel.find();
      const id = data[0]._id;
      const day = data[0].days;
      console.log(id)

      const daysUpdate = await DataScienceModel.findByIdAndUpdate(id, { days: day + 1 }, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });

      // console.log(daysUpdate);
    }
    if (user.course == "Full Stack Web Development") {
      const data = await FullStackModel.find();
      const id = data[0]._id;
      const day = data[0].days;
      console.log(id)

      const daysUpdate = await FullStackModel.findByIdAndUpdate(id, { days: day + 1 }, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
    }
    if (user.course == "Embedded Systems & Robotics with IOT") {
      const data = await IOTModel.find();
      const id = data[0]._id;
      const day = data[0].days;
      console.log(id)

      const daysUpdate = await IOTModel.findByIdAndUpdate(id, { days: day + 1 }, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
    }
    if (user.course == "Cloud Computing & DevOps") {
      const data = await DevOpsModel.find();
      const id = data[0]._id;
      const day = data[0].days;
      console.log(id)

      const daysUpdate = await DevOpsModel.findByIdAndUpdate(id, { days: day + 1 }, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
    }

    res.status(200).json({
      success: true,
      message: "Attendance updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
