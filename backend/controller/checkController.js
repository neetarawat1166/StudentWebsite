import { FullStackModel } from "../models/FullStackUpdateModel";


// Get User
export const CheckData = async (req, res) => {
    try {
      const { course } = req.body;
      const students = await UserModel.find({$and: [{
        course: course,
        profile: "Student"
      }]});
  
      res.status(200).json({
        success: true,
        students,
      });
    } catch (error) {
      console.error("Error fetching students:", error);
      res.status(500).json({ success: false, message: "Server Error" });
    }
  };