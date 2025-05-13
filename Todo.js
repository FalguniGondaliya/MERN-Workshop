import { useState } from 'react';
import './App.css';

function App() {
  let [todolist, setTodolist] = useState([]);

  // ✅ Add item
  let saveTodoList = (event) => {
    event.preventDefault();
    let toname = event.target.toname.value.trim();

    if (toname === "") {
      alert("Please enter a todo name.");
      return;
    }

    if (!todolist.includes(toname)) {
      let finalDOlist = [...todolist, toname];
      setTodolist(finalDOlist);
    } else {
      alert("Todo name already exists...");
    }

    event.target.reset(); // clear input after submit
  };

  // ✅ Delete item by index
  const deleteTodo = (indexToDelete) => {
    const updatedList = todolist.filter((_, index) => index !== indexToDelete);
    setTodolist(updatedList);
  };

  let list = todolist.map((value, index) => {
    return (
      <ToDolistItems
        key={index}
        value={value}
        index={index}
        deleteTodo={deleteTodo}
      />
    );
  });

  return (
    <div className="App">
      <h1>TODO list</h1>
      <form onSubmit={saveTodoList}>
        <input type="text" name="toname" />
        <button>Save</button>
      </form>
      <div className="outerDiv">
        <ul>{list}</ul>
      </div>
    </div>
  );
}

export default App;

// ✅ Component to display each item
function ToDolistItems({ value, index, deleteTodo }) {
  return (
    <li>
      {value}
      <span onClick={() => deleteTodo(index)}>&times;</span>
    </li>
  );
}
