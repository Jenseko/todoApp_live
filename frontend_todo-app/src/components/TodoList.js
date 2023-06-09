
import TodoItems from './TodoItems.js';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [errors, setErrors] = useState({});

    // app.get ------------------------------------------------

    useEffect(() => {
        const getTodos = async () => {
            const response = await axios.get('/api/todos')
            setTodos(response.data)
        }
        getTodos()
    }, []);

    // app.post -----------------------------------------------

    const handleSubmit = async (e) => {
        e.preventDefault();
        let title = e.currentTarget[0].value;
        axios.post('/api/todos', { title })
            .then((err) => {
                setErrors(err.response.errors);
            });
        title = e.currentTarget[0].value = "";
    };

    // app.delete ----------------------------------------------

    const deleteTodo = async (id) => {
        const response = await axios.delete(`/api/todos/${id}`);
        setTodos(todos.filter((todo) => todo._id !== id));
    };

    // app.put ----------------------------------------------

    const updateTodo = async (id) => {
        const updatedTodo = todos.map((todo) => {
            // Finden des Todo + ID, die Eigenschaft "completed" wird auch damit geändert
            if (todo._id === id) {
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            }
            return todo;
        });
        try {
            setTodos(updatedTodo);
            // Abschicken des Requests
            const todoToUpdate = todos.find((todo) => todo._id === id);
            // State wird nach Request geändert
            const response = await axios.put(`/api/todos/${id}`,
                { completed: !todoToUpdate.completed });
            console.log(updatedTodo);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <section className='todo_section'>
            <form
                onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='...give me todos'
                />
                <small>{errors?.title?.message}</small>
                <br />
                <button>Add</button>
            </form>
            <ul>
                {todos && todos.map((elt, index) => {
                    return (
                        <TodoItems
                            key={index}
                            todo={elt}
                            delete={setTodos}
                            completeTodoArr={todos}
                        />
                    )
                })}
            </ul>
        </section>
    );
}

export default TodoList;
