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
    console.log(course);

    let UpdateData = "";

    if (course == "Data Science & Machine Learning with AI") {
      UpdateData = await DataScienceModel.find();
      console.log(UpdateData);
    }
    if (course == "Full Stack Web Development") {
      UpdateData = await FullStackModel.find();
      console.log(UpdateData);
    }
    if (course == "Embedded Systems & Robotics with IOT") {
      UpdateData = await IOTModel.find();
      console.log(UpdateData);
    }
    if (course == "Cloud Computing & DevOps") {
      UpdateData = await DevOpsModel.find();
      console.log(UpdateData);
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
    console.log(course);

    let UpdateData = "";

    if (course == "Data Science & Machine Learning with AI") {
      UpdateData = await DataScienceModel.find();
      console.log(UpdateData);
    }
    if (course == "Full Stack Web Development") {
      UpdateData = await FullStackModel.find();
      console.log(UpdateData);
    }
    if (course == "Embedded Systems & Robotics with IOT") {
      UpdateData = await IOTModel.find();
      console.log(UpdateData);
    }
    if (course == "Cloud Computing & DevOps") {
      UpdateData = await DevOpsModel.find();
      console.log(UpdateData);
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
