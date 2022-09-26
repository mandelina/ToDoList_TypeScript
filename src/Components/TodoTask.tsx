import { ITask } from "../Interfaces";

import delete_btn from "../assets/delete.svg";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: number): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <li className="task">
      <span className="taskNameInput"> {task.taskName}</span>
      <button onClick={() => completeTask(task.id)}>
        <img className="delete_btn" src={delete_btn} alt="" />
      </button>
    </li>
  );
};

export default TodoTask;
