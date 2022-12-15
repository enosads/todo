import "./global.css";
import {Header} from "./components/Header/Header";
import {FormNewTask} from "./components/FormNewTask/FormNewTask";
import {TodoList} from "./components/TodoList/TodoList";
import {TaskModel} from "./models/Task";
import {useEffect, useState} from "react";
import {v4 as uuidv4} from 'uuid';

function App() {

  const [tasks, setTasks] = useState<TaskModel[]>(
    localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks') || '') : []
  );

  useEffect(() => {
    const tasksStorage = localStorage.getItem('tasks');
    console.log(tasksStorage);
    if (tasksStorage) {
      setTasks(JSON.parse(tasksStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    const tasksStorage = localStorage.getItem('tasks');
    console.log('tasksStorage', tasksStorage);
  }, [tasks]);

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
