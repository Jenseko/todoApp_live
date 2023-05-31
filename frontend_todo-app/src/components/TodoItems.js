import React, { useState } from 'react';
import icon from './img/PngItem_2009230.png';

// ---------------------------------------------------

const TodoItems = (props) => {
    const [finish, setFinish] = useState(false);
    console.log(props);

    const done = () => {
        // not ! operator => toggle funktion
        setFinish(!finish);
    }

    const deleteTodo = () => {
        // filtert alles raus was nicht mein einzelnes todo ist
        const newTodoList = props.completeTodoArr.filter((elt) => {
            return elt !== props.todo
        })
        props.delete(newTodoList);
    }
    return (
        <div>
            <li style={{ textDecoration: finish ? "line-through" : "none", listStyle: 'none' }}>
                <input type="checkbox" onChange={done} />
                <span>{props.todo}</span>
                <img src={icon} alt="trash icon" onClick={deleteTodo} />
            </li>
        </div>
    );
}

export default TodoItems;