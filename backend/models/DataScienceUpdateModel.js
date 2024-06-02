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
        // default: "Welcome DevOps Assignment Title",
        required: true
    },
    task: {
        type: String,
        // default: "Welcome DevOps Assignment task",
        required: true
    },
    assignDate: {
        type: String,
        // default: new Date().toLocaleDateString(),
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
    }
});

export const DataScienceModel = mongoose.model("DataScienceDataUpdate", userSchema);
