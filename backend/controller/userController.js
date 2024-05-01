import { TeacherModel, StudentModel } from "../models/userModels.js";
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';

const JWT_SECURE = "thisisourjsonwebtokenandimfromindia"

export const Signup = async (req, res) => {
    const { profile, name, email, password, course } = req.body;

    if (!profile || !name || !email || !password || !course) {
        return res.status(400).json({
            success: false,
            message: "Please fill all the form details"
        });
    }

    try {
        let newUser,newUser2;
        if (profile === 'teacher') {
            // If the profile is teacher, save data to TeacherModel
            newUser = await TeacherModel.findOne({ email });
            newUser2 = await StudentModel.findOne({ email });
            if (newUser || newUser2) {
                return res.status(409).json({
                    success: false,
                    message: "This email already exists"
                });
            }
            newUser = await TeacherModel.create({
                profile,
                name,
                email,
                password: await bcrypt.hash(password, 10),
                course
            });
        } else if (profile === 'student') {
            // If the profile is student, save data to StudentModel
            newUser = await StudentModel.findOne({ email });
            newUser2 = await TeacherModel.findOne({ email });
            if (newUser || newUser2) {
                return res.status(409).json({
                    success: false,
                    message: "This email already exists"
                });
            }
            newUser = await StudentModel.create({
                profile,
                name,
                email,
                password: await bcrypt.hash(password, 10),
                course
            });
        } else {
            return res.status(400).json({
                success: false,
                message: "Invalid profile type"
            });
        }

        res.status(200).json({
            success: true,
            message: "Data saved successfully",
            user: newUser
        });
    } catch (error) {
        console.error("Error in signup:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

// Login controller
export const Login = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);

    // Check in studentModel
    const studentData = await StudentModel.findOne({ email: email });
    console.log(studentData);
    
    // If not found in studentModel, check in TeacherModel
    if (!studentData) {
        const teacherData = await TeacherModel.findOne({ email: email });
        console.log(teacherData);
        
        if (!teacherData) {
            return res.status(401).json({
                success: false,
                message: "Please provide valid credentials -email"
            });
        }
        
        // Password compare for teacherData
        const comparePassTeacher = await bcrypt.compare(password, teacherData.password);
        console.log(comparePassTeacher);
        
        if (!comparePassTeacher) {
            return res.status(401).json({
                success: false,
                message: "Please provide valid credentials - password"
            });
        }
        
        // JWT token for teacherData
        const userTeacher = {
            id: {
                userID: teacherData._id
            }
        };
        const tokenTeacher = JWT.sign(userTeacher, JWT_SECURE, { expiresIn: '1h' });
        console.log(tokenTeacher)
        return res.status(200).json({
            success: true,
            message: "Login successfully",
            token: tokenTeacher
        });
    }

    // Password compare for studentData
    const comparePassStudent = await bcrypt.compare(password, studentData.password);
    console.log(comparePassStudent);
    
    if (!comparePassStudent) {
        return res.status(401).json({
            success: false,
            message: "Please provide valid credentials - password"
        });
    }
    
    // JWT token for studentData
    const userStudent = {
        id: {
            userID: studentData._id
        }
    };
    const tokenStudent = JWT.sign(userStudent, JWT_SECURE, { expiresIn: '1h' });
    console.log(tokenStudent)
    res.status(200).json({
        success: true,
        message: "Login successfully",
        token: tokenStudent
    });
};
