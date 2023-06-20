import Link from "next/link";
import { redirect } from "next/navigation";
import styles from "./page.module.css";
import React from "react";
import { prisma } from "@/db";

async function createTodo(data: FormData) {
  "use server";

  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }

  await prisma.todo.create({ data: { title, complete: false } });
  redirect("/");
}

const New = () => {
  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <span className={styles.title}>Todos</span>
      </header>
      <form action={createTodo} className={styles.form}>
        <input type="text" name="title" className={styles.input} />
        <div className={styles.buttonBox}>
          <Link className={styles.cancel} href="..">
            Cancel
          </Link>
          <button type="submit" className={styles.submit}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default New;
