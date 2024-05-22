import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true,
        default : "Welcome Data Science"
    },
    announcement: {
        type: Array,
        required: true,
        default : "Welcome Data Science"
    },
    assignment: {
        type: Array,
        required: true,
        default : "Welcome Data Science"
    },
    days:{
        type: Number,
        required: true,
        default : 0
    },
});

export const DataScienceModel = mongoose.model("DataScienceDataUpdate", userSchema);