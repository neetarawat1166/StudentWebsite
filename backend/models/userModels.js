import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    profile: {
        type: String,
        required: true,
        enum: ["Teacher", "Student"]
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    }
});

// Exporting separate models for teacher and student
// export const TeacherModel = mongoose.model("teacher", userSchema);
// export const StudentModel = mongoose.model("student", userSchema);
export const UserModel = mongoose.model("users", userSchema);
