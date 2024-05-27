import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const userSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true,
        default : "Welcome DevOps"
    },
    announcement: [announcementSchema],
    assignment: {
        type: Array,
        required: true,
        default : "Welcome DevOps"
    },
    days:{
        type: Number,
        required: true,
        default : 0
    }
});

export const FullStackModel = mongoose.model("FullStackDataUpdate", userSchema);