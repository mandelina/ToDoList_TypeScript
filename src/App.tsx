import { FC, ChangeEvent, useState, useRef } from "react";
import "./App.css";
import "./reset.css";
import TodoTask from "./Components/TodoTask";
import Heading from "./Components/Heading";
import { ITask } from "./Interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>(""); // 타입지정
  // const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]); // 사용자가 입력 후 추적해야하는 타입이기때문
  let nextId = useRef(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTask(e.target.value);
  };

  // 할일 추가
  const addTask = (): void => {
    let newTask = { id: nextId.current, taskName: task };
    if (newTask.taskName.length === 0) {
      alert("1글자 이상 입력해주세요!");
    } else {
      setTodo([...todo, newTask]);
      setTask(""); // 입력후 input창 초기화
      nextId.current++;
    }
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
        <div className="addTask">
          <input
            type="text"
            placeholder="할 일을 작성하세요!"
            maxLength={25}
            name="task"
            value={task}
            onChange={handleChange}
          />
          <button onClick={addTask}> 추가 </button>
        </div>
        <ul className="todoList">
          {todo.map((task: ITask, key: number) => {
            return (
              <TodoTask key={key} task={task} completeTask={completeTask} />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default App;
