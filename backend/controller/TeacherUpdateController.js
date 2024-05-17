import { UserModel } from "../models/userModels";

// Update Post
export const TeacherUpdateData = async (req, res) => {
    try {
        // Extract user role from request
        const { profile,course } = req.body;
        console.log(profile);
        
        if (profile === "Student") {
            return res.status(401).json({
                success: false,
                message: "Unauthorized access: User role not allowed to update data."
            });
        }
        
        

        // // Extract post ID from request parameters
        // const { id } = req.params;
        // console.log(id)
        

    } catch (error) {
        // Handle unexpected errors
        console.error("Error updating data:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error."
        });
    }
}