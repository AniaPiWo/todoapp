import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { prisma } from '@/db'

export default async function Home() {

  const todos = await prisma.todo.findMany()

  return (
    <div className={styles.main}>

    <header className={styles.header}>
      <span className={styles.title}>Todos</span>
      <Link className={styles.newTaskBtn} href="/new">New</Link>
    </header>
    <ul className={styles.list}>
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
    </div>
  )
}
