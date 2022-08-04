import "./global.css";
import {Header} from "./assets/components/Header";
import {FormNewTask} from "./assets/components/FormNewTask";
import styles from "./App.module.css";

function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <FormNewTask/>
      </div>
    </div>
  )
}

export default App
