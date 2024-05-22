import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true,
        default : "Welcome IOT"
    },
    announcement: {
        type: Array,
        required: true,
        default : "Welcome IOT"
    },
    assignment: {
        type: Array,
        required: true,
        default : "Welcome IOT"
    },
    days:{
        type: Number,
        required: true,
        default : 0
    }
});

export const IOTModel = mongoose.model("IOTDataUpdate", userSchema);