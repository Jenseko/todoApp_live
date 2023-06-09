
import icon from './img/PngItem_2009230.png';

// ---------------------------------------------------

const TodoItems = ({ todo, deleteTodo, updateTodo }) => {

    console.log(props);


    return (
        <div>
            <li style={{ textDecoration: todo.completed ? "line-through rgb(178, 90, 255) 2px" : "none", listStyle: 'none' }}>
                <input
                    type="checkbox" id="checkbox"
                    onChange={() => updateTodo(todo._id)}
                    defaultChecked={todo.completed}
                />
                <span>{todo.title}</span>
                <img src={icon} alt="trash icon" onClick={() => deleteTodo(todo._id)} />
            </li>
        </div>
    );
}

export default TodoItems;