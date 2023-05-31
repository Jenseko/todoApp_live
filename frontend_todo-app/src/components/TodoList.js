
import TodoItems from './TodoItems.js';
import React, { useState, useEffect } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState(["go shopping", "read a book", "go with the dog"]);
    const [inputTodo, setInputTodo] = useState("");

    useEffect(() => {
        const getData = async () => {
            const result = await fetch('http://localhost:3000/todos', {});
            const data = await result.json();
            setTodos(data);
        };
        getData();
    }, []);


    const addTodo = () => {
        // nimm alles aus todos und füge den value aus dem input zu
        setTodos([...todos, inputTodo]);
        // cleart das Inputfeld nach Hinzufügen eines Todos
        setInputTodo('');
    }

    return (
        <section className='todo_section'>
            <form action="#">
                <input type="text" value={inputTodo} onChange={(event) => setInputTodo(event.target.value)} placeholder='...give me todos' />
                <input type="button" value="Add" onClick={addTodo} />
            </form>
            <ul>
                {todos.map((elt, index) => {
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
