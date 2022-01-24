import style from "./app.module.scss";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import { useAppSelector } from "./store/hooks";

function App() {
  const pendingTasks = useAppSelector((state) => state.todos.data.length);

  return (
    <div className={style["container"]}>
      <h1>Aplikacja ToDo React - 22689</h1>
      <TodoForm />
      <Todos />
      <span className={style["pending"]}>
        {pendingTasks > 0 ? pendingTasks > 1 ? 'Masz zapisane ' + pendingTasks + ' zadania ToDo' : 'Masz zapisane jedno zadanie ToDo' : 'Nie masz teraz żadnych zadań'}
      </span>
    </div>
  );
}

export default App;
