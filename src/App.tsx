import {
  FC,
  ChangeEvent,
  KeyboardEvent,
  useState,
  useRef,
  useEffect,
} from "react";
import "./App.css";
import "./reset.css";
import TodoTask from "./Components/TodoTask";
import Heading from "./Components/Heading";
import { ITask } from "./Interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [todo, setTodo] = useState<ITask[]>([]); // 사용자가 입력 후 추적해야하는 타입이기때문

  let nextId = useRef(1);

  useEffect(() => {}, [todo]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTask(e.target.value);
  };

  // 할일 추가
  const addTask = (): void => {
    let newTask = { id: nextId.current, taskName: task, checked: false };
    if (newTask.taskName.length === 0) {
      alert("1글자 이상 입력해주세요!");
    } else {
      setTodo([...todo, newTask]);
      setTask(""); // 입력후 input창 초기화
      nextId.current++;
      console.log(todo);
    }
  };

  //enter키 누를시 추가
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  // 할일 삭제
  const deleteTask = (taskIdToDelete: number): void => {
    setTodo(
      todo.filter((task) => {
        return task.id !== taskIdToDelete; //  완료한 일은 삭제
      })
    );
  };

  //할일 완료
  const completeTask = (taskIdToComplete: number): void => {
    setTodo(
      todo.map((todo) =>
        todo.id === taskIdToComplete
          ? { ...todo, checked: !todo.checked }
          : todo
      )
    );
    console.log(todo);
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
            onKeyPress={handleKeyPress}
          />
          <button onClick={addTask}> 추가 </button>
        </div>
        <ul className="todoList">
          {todo.map((task: ITask, key: number) => {
            return (
              <TodoTask
                key={key}
                task={task}
                deleteTask={deleteTask}
                completeTask={completeTask}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default App;
