import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true,
        default: "Welcome Fullstack"
    },
    description: {
        type: String,
        required: true,
        default: "Welcome Fullstack"
        
    }
});

const assignmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    task: {
        type: String,
        required: true
    },
    assignDate: {
        type: String,
        required: true
    },
    dueDate: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const userSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true,
        default: "Welcome Fullstack"
    },
    announcement: [announcementSchema],
    assignment: {
        type: [assignmentSchema],
        required: true,
        default: []
    },
    days: {
        type: Number,
        required: true,
        default: 0
    },
    resourses: {
        type: Array,
        required: true
    }
});
export const FullStackModel = mongoose.model("FullStackDataUpdate", userSchema);