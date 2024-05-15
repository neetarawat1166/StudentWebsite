import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true,
    },
    attendance: {
        type: String,
        required: true
    },
    announcement: {
        type: Array,
        required: true
    },
    assignment: {
        type: Array,
        required: true
    }
});

export const UserModel = mongoose.model("dataUpdate", userSchema);