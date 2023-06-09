import './App.css';
import TodoItems from './components/TodoItems';
// ------------------

import TodoList from './components/TodoList';

// ------------------

function App() {

  return (
    <div className="App">
      <h1>My ToDos:</h1>
      <TodoList />
    </div>
  );
}

export default App;
