import mongoose from 'mongoose';
import { Todo } from '../model/Todo.js';
import 'dotenv/config';

await mongoose.connect(process.env.DB);

// neu
const user = new Todo();
user.title = "Wäsche waschen";
await user.save();

// Option 2
const user2 = new Todo({
    title: "Müll rausbringen"
});
await user2.save();

// Optional - Todo wird direkt erstellt, ohne save() schreiben zu müssen
await Todo.create({
    title: "Auto waschen"
});

mongoose.disconnect();