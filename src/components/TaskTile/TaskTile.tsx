import {TaskModel} from "../../models/Task";
import styles from "./TaskTile.module.css";
import {TrashIcon} from "../../assets/icons/TrashIcon";
import {useState} from "react";

interface TaskTileProps {
  task: TaskModel;
  toggleTask: (task: TaskModel) => void;
  removeTask: (task: TaskModel) => void;
}

export const TaskTile = ({task, toggleTask, removeTask}: TaskTileProps) => {
  const [isHoveringTrashIcon, setIsHoveringTrashIcon] = useState(false);

  const handleMouseEnterTrashButton = () => {
    setIsHoveringTrashIcon(true);
  }

  const handleMouseLeaveTrashButton = () => {
    setIsHoveringTrashIcon(false);
  }
  return (
    <div className={styles.taskTile}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task)}
        id={task.id}
      />
      <label
        className={task.completed ? styles.completed : undefined}
        htmlFor={task.id}
      >
        {task.title}
      </label>
      <button
        name={'remove-task'}
        className={styles.buttonDelete}
        title="Remover tarefa"
        onMouseEnter={handleMouseEnterTrashButton}
        onMouseLeave={handleMouseLeaveTrashButton}
        onClick={() => removeTask(task)}
      >
        <TrashIcon color={isHoveringTrashIcon ? '#E25858' : '#808080'}/>
      </button>
    </div>
  );
}