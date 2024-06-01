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
    mobile: {
        type: Number,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    attendance :{
        type:Number,
        required : true,
        default: 0
    }
}, {timestamps: true});

export const UserModel = mongoose.model("users", userSchema);
