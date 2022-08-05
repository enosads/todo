import "./global.css";
import {Header} from "./components/Header/Header";
import {FormNewTask} from "./components/FormNewTask/FormNewTask";
import styles from "./App.module.css";
import {TodoList} from "./components/TodoList/TodoList";
import {TaskModel} from "./models/Task";
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';

function App() {

  const initialTasks: TaskModel[] = [
    {
      id: uuidv4(),
      title: "Fazer o curso de React",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Fazer o curso de React Native",
      completed: true,
    },
    {
      id: uuidv4(),
      title: "Fazer o curso de NodeJS",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      completed: true,
    }
  ];

  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (task: TaskModel) => {
    const newTasks = tasks.map(t => {
      if (t.id === task.id) {
        return {...t, completed: !t.completed};
      }
      return t;
    });
    setTasks(newTasks);
  }

  const addTask = (title: string) => {
    const newTask = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  const removeTask = (task: TaskModel) => {
    const newTasks = tasks.filter(t => t.id !== task.id);
    setTasks(newTasks);
  }

  return (
    <div>
      <Header/>
      <FormNewTask
        addTask={addTask}
      />
      <TodoList
        tasks={tasks}
        toggleTask={toggleTask}
        removeTask={removeTask}
      />
    </div>
  )
}

export default App;
