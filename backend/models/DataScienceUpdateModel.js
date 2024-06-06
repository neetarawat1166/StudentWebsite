import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true,
        default: "Welcome DevOps"
    },
    description: {
        type: String,
        required: true,
        default: "Welcome DevOps"
        
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
        default: "Welcome DevOps"
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

export const DataScienceModel = mongoose.model("DataScienceDataUpdate", userSchema);
