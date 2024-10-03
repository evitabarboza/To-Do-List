import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { v4 as uuidv4 } from 'uuid';
import { MdOutlineEditNote } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState(false);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const toggleFinished = () => {
    setshowFinished(!showFinished);
  };

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    saveToLS();
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    saveToLS();
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    saveToLS();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => item.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS();
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-blue-50 min-h-[80vh] w-1/2">
        <h1 className="text-blue-950 font-bold text-center text-xl">iTask - Manage your To-Dos at One Place</h1>
        <div className="addTodo my-4 flex flex-col gap-2">
          <h2 className="text-lg text-blue-900 font-bold">Add a To-Do</h2>
          <input onChange={handleChange} value={todo} type="text" className="w-full" />
          <button onClick={handleAdd} disabled={todo.length <= 3} className="bg-blue-800 hover:bg-violet-950 disable:bg-blue-700 p-2 py-1 text-sm font-semibold text-white rounded-md mt-2 ">Save</button>
        </div>
        <div className="my-4">
          <input onChange={toggleFinished} type="checkbox" checked={showFinished} /> Show Finished
        </div>
        <h2 className="text-lg font-bold text-blue-900">Your To-Dos</h2>
        <div className="addToDos">
          {todos.length === 0 && <div className="m-5">No To-Dos to display</div>}
          {todos
            .filter(item => showFinished ? item.isCompleted : !item.isCompleted)
            .map(item => (
              <div key={item.id} className="addTodo flex w-1/2 my-3 justify-between">
                <div className="flex gap-5">
                  <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
                  <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                </div>
                <div className="buttons flex h-full">
                  <button onClick={(e) => handleEdit(e, item.id)} className="bg-blue-800 hover:bg-violet-950 p-2 py-1 font-semibold text-white rounded-full mx-1 text-lg">
                    <MdOutlineEditNote />
                  </button>
                  <button onClick={(e) => handleDelete(e, item.id)} className="bg-blue-800 hover:bg-violet-950 p-2 py-1 font-semibold text-white rounded-full mx-1 text-lg">
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>

 
      <footer className="text-center py-4 bg-blue-950 text-white mt-auto">
        <p>&copy; 2024 iTask - Your Todo Manager | All Rights Reserved</p>
      </footer>
    </>
  );
}

export default App;
