import { UserModel } from "../models/userModels.js";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import router from "../routes/userRouter.js";
import { sentToken } from "../utils/jwtauth.js";

const JWT_SECURE = "thisisourjsonwebtokenandimfromindia";

export const Signup = async (req, res) => {
  const { profile, name, email, password, course } = req.body;

  if (!profile || !name || !email || !password || !course) {
    return res.status(404).json({
      success: false,
      message: "Please fill all the form details",
    });
  }
  try {
    let user = await UserModel.findOne({ email });
    if(user){
        return res.status(400).json({
            success: false,
            message: "This Email Already Exists"
        })
    }

    const saltRound = 10;
    const hashedPass = await bcrypt.hash(password, saltRound)

    const userdata = await UserModel.create({
      profile,
      name,
      email,
      password: hashedPass,
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
  // console.log(email, password, profile);
  
  try {
    const isEmail = await UserModel.findOne({email});
    if(!isEmail){
        return res.status(400).json({
            success: false,
            message: "Please Enter Valid Credentials"
        })
    }

    if(isEmail.profile !== profile){
      console.log("err")
      return res.status(400).json({
            success: false,
            message: "Please Enter Valid Credentials"
      })
    }

    const compass = await bcrypt.compare(password, isEmail.password);

    if(!compass){
        return res.status(400).json({
            success: false,
            message: "Please Enter Valid Credentials"
        })
    }
    sentToken(isEmail, res, 201, "Login Successfully")
  } catch (error) {
    console.log(error)
    
  }
};

// Logout Controller
export const Logout = (req, res) => {
    res.clearCookie("token").status(201).json({
        success: true,
        message: "Logout Successfully!"
    });
};



// Get User
export const getUser = (req, res) => {
    const user = req.user;

    res.status(201).json({
        success: true,
        message: "User Verify",
        user
    })

}