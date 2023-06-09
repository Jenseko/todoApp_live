import express from 'express';
import mongoose from 'mongoose';
import { Todo } from "./Model/Todo.js";
import 'dotenv/config';

mongoose.connect(process.env.DB);

// -----------------------------------

const app = express();
const port = process.env.Port || 3001;

app.use(express.json());

app.get('/api', (req, res) => {
    res.send('It`s working!');
});

// ---- GET ~/api/todos -------------------


app.get('/api/todos', async (req, res) => {
    const todos = await Todo.find();
    res.send(todos);
});


// ---- POST ~/api/todos ------------------


app.post('/api/todos', async (req, res) => {
    try {
        // mongoose validiert
        const newTodo = await Todo.create(req.body);
        res.send({ inputTodo: newTodo, errors: null });
    } catch (error) {
        // wenn ein Fehler auftritt, wird dieser ans Frontend geschickt
        res.send({ inputTodo: null, errors: error.errors });
    }
});

// ----- PUT ~/todos/:id --------------


app.put('/api/todos/:id', async (req, res) => {
    try {
        const editTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send({ editedEntry: editTodo, errors: null });
    } catch (error) {
        res.send({ editedEntry: null, errors: error.errors });
    }
});


// ----- DELETE ~/todos/:id -----------


app.delete('/api/todos/:id', async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        res.send({ deletedEntry: deletedTodo, errors: null });
    } catch (error) {
        res.send({ deltedEntry: null, errors: error.errors });
    }
});


// -------------------


app.listen(port, () => {
    console.log(`Here we go on port ${port}`);
})
