import { Schema, model } from 'mongoose';

const todoSchema = new Schema({
    title: {
        type: String,
        required: [true, "title is required!"],
    },
    completed: {
        type: Boolean,
        default: false
    }
});

export const Todo = model("Todo", todoSchema);