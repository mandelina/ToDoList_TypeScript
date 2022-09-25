import { FC, ChangeEvent, useState, useRef } from "react";
import "./App.css";
import TodoTask from "./Components/TodoTask";
import Heading from "./Components/Heading";
import { ITask } from "./Interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>(""); // 타입지정
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]); // 사용자가 입력 후 추적해야하는 타입이기때문
  let nextId = useRef(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value)); // Number가 없을경우 에러 (타입오류)
    }
  };

  // 할일 추가
  const addTask = (): void => {
    let newTask = { id: nextId.current, taskName: task, deadline: deadline };
    setTodo([...todo, newTask]);
    setTask(""); // 입력후 input창 초기화
    setDeadline(0);
    nextId.current++;
  };

  // 할일 삭제
  const completeTask = (taskIdToDelete: number): void => {
    setTodo(
      todo.filter((task) => {
        return task.id !== taskIdToDelete; //  완료한 일은 삭제
      })
    );
  };

  return (
    <div className="App">
      <Heading />
      <div className="wrapper">
        <div className="header">
          <div className="inputContainer">
            <input
              type="text"
              placeholder="할 일을 작성하세요!"
              maxLength={18}
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
        <ul className="todoLists">
          <li className="todoList">
            {todo.map((task: ITask, key: number) => {
              return (
                <TodoTask key={key} task={task} completeTask={completeTask} />
              );
            })}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default App;
