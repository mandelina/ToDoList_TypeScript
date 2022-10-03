import {
  FC,
  ChangeEvent,
  KeyboardEvent,
  useState,
  useRef,
  useEffect,
  memo,
} from "react";
import "./App.css";
import "./reset.css";
import TodoTask from "./Components/TodoTask";
import Heading from "./Components/Heading";
import { ITask } from "./Interfaces";
import { v4 as uuidv4 } from "uuid";
// import uuid from "react-uuid"

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [todo, setTodo] = useState<ITask[]>([]);
  const isMount = useRef(true);

  useEffect(() => {
    //재렌더링했을때를 제외하고 localstorage를 업데이트 시켜준다.
    if (!isMount.current) {
      localStorage.setItem("todos", JSON.stringify(todo));
    }
  }, [todo]);

  useEffect(() => {
    // 렌더링시 로컬스토리지에 값이 있다면 가져와서 set해주기
    let localTodo = localStorage.getItem("todos");
    if (localTodo !== "undefined" && localTodo !== "[]") {
      setTodo(JSON.parse(localTodo));
    }
    if (!localTodo) {
      localTodo = "[]";
    }
    isMount.current = false;
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTask(e.target.value);
  };

  // 할일 추가
  const addTask = (): void => {
    let newTask = {
      id: uuidv4(),
      taskName: task,
      checked: false,
      revise: false,
    };
    if (newTask.taskName.length === 0) {
      alert("1글자 이상 입력해주세요!");
    } else {
      console.log(todo);
      console.log(newTask);
      setTodo([...todo, newTask]);
      setTask(""); // 입력후 input창 초기화
    }
  };

  //enter키 누를시 추가
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  // 할일 삭제
  const deleteTask = (taskIdToDelete: string): void => {
    setTodo(
      todo.filter((task) => {
        return task.id !== taskIdToDelete; //  완료한 일은 삭제
      })
    );
  };

  //할일 완료
  const completeTask = (taskIdToComplete: string): void => {
    setTodo(
      todo.map((todo) =>
        todo.id === taskIdToComplete
          ? { ...todo, checked: !todo.checked }
          : todo
      )
    );
  };

  //할일 수정 input창
  const modifyTask = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    taskIdToModify: string
  ): void => {
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
    taskIdToModify: string
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
  const focusOut = (taskIdToFocusOut: string): void => {
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
          {todo?.map((task: ITask) => {
            return (
              <TodoTask
                key={task.id}
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
export default memo(App);
