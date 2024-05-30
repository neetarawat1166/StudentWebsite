import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    course:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required:true
    },
    selectedSubtopics: {
        type: Array,
        required: true,
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

export const FeedbackModel = mongoose.model("Feedback", userSchema);
