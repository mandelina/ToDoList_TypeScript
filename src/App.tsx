import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import TodoTask from "./Components/TodoTask";
import { ITask } from "./Interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>(""); // 타입지정
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]); // 사용자가 입력 후 추적해야하는 타입이기때문

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value)); // Number가 없을경우 에러 (타입오류)
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodo([...todo, newTask]);
    setTask(""); // 입력후 input창 초기화
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodo(
      todo.filter((task) => {
        return task.taskName !== taskNameToDelete; //  완료한 일은 삭제
      })
    );
  };

  return (
    <div className="App">
      <h1 className="heading">ToDoList</h1>
      <div className="wrapper">
        <div className="header">
          <div className="inputContainer">
            <input
              type="text"
              placeholder="Task..."
              name="task"
              value={task}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Deadline(in Days)..."
              name="deadline"
              value={deadline}
              onChange={handleChange}
            />
          </div>
          <button onClick={addTask}> Add Task </button>
        </div>
        <div className="todoList">
          {todo.map((task: ITask, key: number) => {
            return (
              <TodoTask key={key} task={task} completeTask={completeTask} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default App;
