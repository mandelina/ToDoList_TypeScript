import React, { FC, useState } from "react";
import "./App.css";

const App: FC = () => {
  const [task, setTask] = useState<string>(""); // 타입지정
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState([]);

  const handleChange = () => {};

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="Task..." />
          <input type="number" placeholder="Deadline(in Days)..." />
        </div>
        <button> Add Task </button>
      </div>
      <div className="todoList"></div>
    </div>
  );
};
export default App;
