import { UserModel } from "../models/userModels";

// Update Post
export const updatePost = async (req, res) => {
    try {
        // Extract user role from request
        const { role } = req.user;
        console.log(role);
        
        if (role === "teacher") {
            return res.status(401).json({
                success: false,
                message: "Unauthorized access: User role not allowed to delete posts."
            });
        }

        // Extract post ID from request parameters
        const { id } = req.params;
        console.log(id)
        
        // Find the post by ID
        let post = await UserModel.findById(id);
        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found."
            });
        }

        post = await UserModel.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })

        res.status(200).json({
            success: true,
            message: "Post Updated"
        })

    } catch (error) {
        // Handle unexpected errors
        console.error("Error deleting post:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error."
        });
    }
}