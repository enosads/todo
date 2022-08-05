import styles from "./TodoList.module.css";

import {TodoListHeader} from "./TodoListHeader";
import {TaskModel} from "../../models/Task";
import {TaskTile} from "../TaskTile/TaskTile";

interface TodoListProps {
  tasks: TaskModel[];
  toggleTask: (task: TaskModel) => void;
  removeTask: (task: TaskModel) => void;
}

export function TodoList({tasks, toggleTask, removeTask}: TodoListProps) {
  const hasTasks = tasks && tasks.length > 0;
  const countTotalTasks = tasks.length;
  const countCompletedTasks = tasks.filter(t => t.completed).length;

  return (
    <div>
      <TodoListHeader
        countTotalTasks={countTotalTasks}
        countCompletedTasks={countCompletedTasks}
      />
      {hasTasks ? (
        <div className={styles.wrapper}>
          <div className={styles.taskList}>
            {tasks.map(task => (
              <TaskTile
                key={task.id}
                task={task}
                toggleTask={toggleTask}
                removeTask={removeTask}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.empty}>
            <div className={styles.emptyImage}/>
            <strong>
              Você ainda não tem tarefas cadastradas
              <span>
            Crie tarefas e organize seus itens a fazer
            </span>
            </strong>
          </div>
        </div>
      )}
    </div>
  )
}