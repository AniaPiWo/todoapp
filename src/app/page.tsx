import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { prisma } from "@/db";
import ToDoItem from "@/components/ToDoItem/ToDoItem";

function getTodos() {
  return prisma.todo.findMany();
}

export default async function Home() {
  async function toggleTodo(id: string, complete: boolean) {
    "use server";
    await prisma.todo.update({ where: { id }, data: { complete } });
  }

  const todos = await getTodos();

  async function deleteTodo(id: string) {
    "use server";
    console.log(todos);
    await prisma.todo.delete({ where: { id } });
    console.log(todos);
    return getTodos();
  }

  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <span className={styles.title}>Todos</span>
        <Link className={styles.newTaskBtn} href="/new">
          New
        </Link>
      </header>
      <ul className={styles.list}>
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}
