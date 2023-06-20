"use client";
import styles from "./ToDoItem.module.css";
import React from "react";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => Promise<void>;
};

const ToDoItem = ({
  id,
  title,
  complete,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) => {
  return (
    <li className={styles.listItem}>
      <div className={styles.input}>
        <input
          id={id}
          type="checkbox"
          className={styles.checkbox}
          defaultChecked={complete}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <label htmlFor={id}>{title}</label>
      </div>
      <div>
        <button className={styles.labelBtn}>Edit</button>
        <button className={styles.labelBtn} onClick={() => deleteTodo(id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
