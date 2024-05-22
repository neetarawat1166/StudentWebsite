import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    topic: {
        type: String,
        default : "Welcome Full Stack",
        required: true
    },
    announcement: {
        type: Array,
        required: true,
        default : "Welcome Full Stack"
    },
    assignment: {
        type: Array,
        required: true,
        default : "Welcome Full Stack"
    },
    days:{
        type: Number,
        required: true,
        default : 0
    }
});

export const FullStackModel = mongoose.model("FullStackDataUpdate", userSchema);