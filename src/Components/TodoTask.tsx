import { ITask } from "../Interfaces";
import delete_btn from "../assets/delete.svg";

interface Props {
  task: ITask;
  completeTask(taskIdToComplete: number): void;
  deleteTask(taskNameToDelete: number): void;
}

const TodoTask = ({ task, deleteTask, completeTask }: Props) => {
  return (
    <li className={"task" + (task.checked ? " completeTask" : "")}>
      <input
        className="checkBox "
        type="checkbox"
        onChange={() => completeTask(task.id)}
      />
      <p className="taskNameInput"> {task.taskName}</p>
      <button onClick={() => deleteTask(task.id)}>
        <img className="delete_btn" src={delete_btn} alt="" />
      </button>
    </li>
  );
};

export default TodoTask;
