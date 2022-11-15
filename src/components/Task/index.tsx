import { Check, Trash } from "phosphor-react";
import styles from './styles.module.css'

export interface TaskData {
  id: string;
  title: string;
  isComplete: boolean;
}

interface TaskProps {
  task: TaskData;
  onCompleteTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({ task, onCompleteTask, onDeleteTask }: TaskProps) {
  function handleCompleteTask() {
    onCompleteTask(task.id);
  }

  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  return (
    <div className={`${styles.container} ${task.isComplete && styles.complete}`}>
      <label>
        <input 
          type="checkbox" 
          checked={task.isComplete} 
          onChange={handleCompleteTask}
        />
        <span>
          <Check weight="bold" size={12} />
        </span>
      </label>

      <span>
        {task.title}
      </span>

      <button 
        type="button"
        className={styles.trashButton} 
        onClick={handleDeleteTask}
      >
        <Trash size={16} />
      </button>
    </div>
  )
}