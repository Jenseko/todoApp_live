import mongoose, { Schema } from 'mongoose';

const todoSchema = new Schema({
    title: {
        type: String,
        required: [true, "title is required!"],
    },
});

export const Todo = mongoose.model("Todo", todoSchema);