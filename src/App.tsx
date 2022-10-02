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
  const [todo, setTodo] = useState<ITask[]>([]);
  const isMount = useRef(true);
  let nextId = useRef(1);
  console.log(isMount.current);

  useEffect(() => {
    //재렌더링했을때를 제외하고 localstorage를 업데이트 시켜준다.
    if (!isMount.current) {
      localStorage.setItem("todos", JSON.stringify(todo));
    }
  }, [todo]);

  useEffect(() => {
    // 렌더링시 로컬스토리지에 값이 있다면 가져와서 set해주기
    const localTodo = localStorage.getItem("todos");
    if (localTodo !== "[]") {
      setTodo(JSON.parse(localTodo || ""));
    }
    isMount.current = false;
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTask(e.target.value);
  };

  // 할일 추가
  const addTask = (): void => {
    let newTask = {
      id: nextId.current,
      taskName: task,
      checked: false,
      revise: false,
    };
    if (newTask.taskName.length === 0) {
      alert("1글자 이상 입력해주세요!");
    } else {
      setTodo([...todo, newTask]);
      setTask(""); // 입력후 input창 초기화
      nextId.current++;
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
  };

  //할일 수정 input창
  const modifyTask = (e: any, taskIdToModify: number): void => {
    if (e.detail === 2) {
      // 더블클릭시
      setTodo(
        todo.map((todo) =>
          todo.id === taskIdToModify ? { ...todo, revise: true } : todo
        )
      );
    }
  };

  // input창에 할 일을 수정하고 enter키를 눌렀을때
  const enterTask = (
    e: KeyboardEvent<HTMLInputElement> & ChangeEvent<HTMLInputElement>,
    taskIdToModify: number
  ) => {
    if (e.key === "Enter") {
      setTodo(
        todo.map((todo) =>
          todo.id === taskIdToModify
            ? { ...todo, taskName: e.target.value, revise: false }
            : todo
        )
      );
    }
  };

  // input창을 나갔을때 안보이게 하기
  const focusOut = (e: any, taskIdToFocusOut: number): void => {
    setTodo(
      todo.map((todo) =>
        todo.id === taskIdToFocusOut ? { ...todo, revise: false } : todo
      )
    );
  };

  // 모두 삭제
  const sortDelete = () => {
    setTodo([]);
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
          <button className="add_btn" onClick={addTask}>
            추가
          </button>

          <button className="all_delete" onClick={sortDelete}>
            전체삭제
          </button>
        </div>
        <ul className="todoList">
          {todo.map((task: ITask, key: number) => {
            return (
              <TodoTask
                key={key}
                task={task}
                deleteTask={deleteTask}
                completeTask={completeTask}
                modifyTask={modifyTask}
                focusOut={focusOut}
                enterTask={enterTask}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default App;
