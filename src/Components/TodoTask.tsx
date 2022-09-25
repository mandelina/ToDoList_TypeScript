import { ITask } from "../Interfaces";

import delete_btn from "../assets/delete.svg";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: number): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span className="taskNameInput"> {task.taskName}</span>
        <span className="dayInput"> 기간: {task.deadline}일</span>
      </div>
      <button onClick={() => completeTask(task.id)}>
        <img className="delete_btn" src={delete_btn} alt="" />
      </button>
    </div>
  );
};

export default TodoTask;
