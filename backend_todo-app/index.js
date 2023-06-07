import express from 'express';
import mongoose from 'mongoose';
import { Todo } from "./Model/Todo.js";
import 'dotenv/config';
mongoose.connect(process.env.DB);

// -----------------------------------

const app = express();
const port = process.env.Port || 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('It`s working!');
});

// ---- GET ~/api/todos -------------------


app.get('/api/todos', async (req, res) => {
    const todos = await Todo.find();
    res.send(todos);
});


// ---- POST ~/api/todos ------------------


app.post('/todos', async (req, res) => {
    try {
        // mongoose validiert
        const newTodo = await Todo.create(reg.body);
        res.send({ inputTodo: newTodo, errors: null });
    } catch (error) {
        // wenn ein Fehler auftritt, wird dieser ans Frontend geschickt
        res.send({ inputTodo: null, errors: error.errors });
    }
});


// ----- DELETE ~/todos/:id -----------


// app.delete('/api/todos/:id', (req, res) => {
//     try {
//         const id = req.params.id;
//         const deleteTodo =
//     }

//     TodosModel.deleteOne(id);
//     res.send("Deleted");
// })


// -------------------


app.listen(port, () => {
    console.log(`Here we go on port ${port}`);
})
