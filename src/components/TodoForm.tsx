import React, { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { addTodo } from "../store/reducers/todosSlice";
import style from "./todoForm.module.scss";

function TodoForm() {
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");

  function changeHandler(e: React.FormEvent<HTMLInputElement>) {
    setText(e.currentTarget.value);
  }

  function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    if (text.trim())
    {
      dispatch(addTodo(text));
      document.getElementById('errorP')!.innerHTML = '';
    }
    else
    {
      document.getElementById('errorP')!.innerHTML = 'Wpisz poprawne zadanie!';
    }
    setText("");
  }

  return (
    <form className={style["todo-form"]} onSubmit={submitHandler}>
      <label>Nowe ToDo</label>
      <p id='errorP' className={style["error"]}></p>
      <div className={style["todo-add"]}>
        <input
          onChange={changeHandler}
          value={text}
          placeholder="Dodaj nowe zadanie ToDo"
        />
        <button>
          <div />
          <div />
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
