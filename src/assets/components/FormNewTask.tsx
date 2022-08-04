import styles from "./FormNewTask.module.css";
import {ChangeEvent, InvalidEvent, useState} from "react";
import plusIcon from "../../assets/icons/plus.svg";

export function FormNewTask() {
  const [newTaskValue, setNewTaskValue] = useState("");

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskValue(event.target.value);
  }

  const isNewTaskEmpty = newTaskValue.trim().length === 0;

  return (
    <form className={styles.form}>
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
        <img src={plusIcon} alt="Ícone de adição" />
      </button>
    </form>
  )
}
