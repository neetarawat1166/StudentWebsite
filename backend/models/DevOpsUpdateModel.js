import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true,
        default : "Welcome DevOps"
    },
    announcement: {
        type: Array,
        required: true,
        default : "Welcome DevOps"
    },
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

export const DevOpsModel = mongoose.model("DevOpsDataUpdate", userSchema);