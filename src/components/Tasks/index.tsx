import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'

import { CreateTask } from "../CreateTask";
import { EmptyTask } from "../EmptyTask";
import { Task, TaskData } from "../Task";

import styles from './styles.module.css'

export function Tasks() {
  const [tasks, setTasks] = useState<TaskData[]>([]);
  
  function handleCreateTask(title: string) {
    const newTask = {
      id: uuidv4(),
      title,
      isComplete: false,
    };

    setTasks(state => [...state, newTask]);
  }

  function handleCompleteTask(id: string) {
    setTasks(state => state.map(
      task => task.id === id 
        ? ({...task, isComplete: !task.isComplete}) 
        : task
      )
    );
  }

  function handleDeleteTask(id: string) {
    setTasks(state => state.filter(task => task.id !== id));
  }

  const totalTasksCreated = tasks.length;
  const totalTasksComplete = tasks.reduce(
    (total, task) => (total += task.isComplete ? 1 : 0), 
    0
  );

  return (
    <main className={styles.container}>
      <CreateTask onCreateTask={handleCreateTask} />

      <div className={styles.info}>
        <div>
          <span className={styles.created}>Tarefas criadas</span>
          <div className={styles.total}>
            {totalTasksCreated}
          </div>
        </div>
        <div>
          <span className={styles.complete}>Concluídas</span>
          <div className={styles.total}>
            {totalTasksCreated > 0 ? `${totalTasksComplete} de ${totalTasksCreated}` : '0'}
          </div>
        </div>
      </div>

      {tasks.length > 0 ? tasks.map(task => (
        <Task 
          key={task.id} 
          task={task} 
          onCompleteTask={handleCompleteTask}
          onDeleteTask={handleDeleteTask}
        />
      )) : (
        <EmptyTask />
      )}
    </main>
  )
}