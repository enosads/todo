import styles from "./TodoList.module.css";

interface TodoListHeaderProps {
  countTotalTasks: number;
  countCompletedTasks: number;
}

export function TodoListHeader({countTotalTasks, countCompletedTasks}: TodoListHeaderProps) {
  return (
    <header className={styles.todoListHeader}>
      <div className={styles.createdTasks}>
        <strong>Tarefas criadas</strong>
        <span className={styles.counter}>{countTotalTasks}</span>
      </div>
      <div className={styles.completedTasks}>
        <strong>Concluídas</strong>
        <span className={styles.counter}>
          {countCompletedTasks} de {countTotalTasks}
        </span>
      </div>
    </header>
  );
}