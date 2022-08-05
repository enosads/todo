import styles from "./FormNewTask.module.css";
import {ChangeEvent, FormEvent, useState} from "react";
import plusIcon from "../../assets/icons/plus.svg";

interface FormNewTaskProps {
  addTask: (title: string) => void;
}

export function FormNewTask({addTask}: FormNewTaskProps) {
  const [newTaskValue, setNewTaskValue] = useState("");
  const isNewTaskEmpty = newTaskValue.trim().length === 0;

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskValue(event.target.value);
  }

  function handleNewTaskSubmit(event: FormEvent) {
    event.preventDefault();
    if (!isNewTaskEmpty) {
      addTask(newTaskValue);
      setNewTaskValue("");
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleNewTaskSubmit}
    >
      <input
        name={'task'}
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTaskValue}
        onChange={handleNewTaskChange}
        required
      />
      <button
        type="submit"
        disabled={isNewTaskEmpty}
      >
        Criar
        <img src={plusIcon} alt="Ícone de adição"/>
      </button>
    </form>
  )
}
