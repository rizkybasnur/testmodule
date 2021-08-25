import "./App.scss";
import { useState } from "react";

function App() {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodo] = useState([]);
  const [modal, setModal] = useState(false);

  const handleChange = (e) => {
    setTodoValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      value: todoValue,
      done: false,
    };

    setTodo([...todos, todo]);
    document.getElementById("todoValue").value = "";
    setTodoValue("");
  };

  const handleDelete = (e) => {
    const { id } = e.target.parentElement;
    todos.splice(id, 1);
    setTodo([...todos]);
  };

  const handleDone = (e) => {
    const { id } = e.target.parentElement;
    todos[id].done = !todos[id].done;
    setTodo([...todos]);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="head"> Assemble your team</h1>

        <form className="todo-form">
          {todos.length > 2 ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                setModal(!modal);
              }}
            >
              Submit
            </button>
          ) : (
            <input type="text" id="todoValue" onChange={handleChange} />
          )}
          {todos.length > 2 ? null : (
            <button type="submit" onClick={handleSubmit}>
              Add
            </button>
          )}
        </form>
        {modal ? (
          <div>
            <h4 className="congrats">Congratulations!</h4>
          </div>
        ) : null}
        <div className="todos">
          {todos &&
            todos.map((todo, i) => (
              <div className="todo-block" key={todo.value} id={i}>
                <button
                  className={todo.done ? "done" : "not-done"}
                  onClick={handleDone}
                >
                  {todo.value}
                </button>
                <button className="delete-todo" onClick={handleDelete}>
                  x
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
