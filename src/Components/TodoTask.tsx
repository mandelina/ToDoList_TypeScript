import { KeyboardEvent, ChangeEvent, memo } from "react";
import { ITask } from "../Interfaces";
import delete_btn from "../assets/delete.svg";

interface Props {
  task: ITask;
  completeTask(taskIdToComplete: string): void;
  deleteTask(taskNameToDelete: string): void;
  modifyTask(e: any, taskIdToModify: string): void;
  focusOut(e: any, taskIdToFocusOut: string): void;
  enterTask(
    e: KeyboardEvent<HTMLInputElement> | ChangeEvent<HTMLInputElement>,
    taskIdToModify: string
  ): void;
}

const TodoTask = ({
  task,
  deleteTask,
  completeTask,
  modifyTask,
  focusOut,
  enterTask,
}: Props) => {
  return (
    <li className={"task" + (task.checked ? " completeTask" : "")}>
      <input
        className="checkBox "
        type="checkbox"
        onChange={() => completeTask(task.id)}
      />
      <input
        type="text"
        className={"revise_task" + (task.revise ? "" : " nonactive")}
        onBlur={(e) => focusOut(e, task.id)}
        onKeyPress={(e) => enterTask(e, task.id)}
      />
      <p className="taskNameInput" onClick={(e) => modifyTask(e, task.id)}>
        {task.taskName}
      </p>
      <button onClick={() => deleteTask(task.id)}>
        <img className="delete_btn" src={delete_btn} alt="" />
      </button>
    </li>
  );
};

export default memo(TodoTask);
