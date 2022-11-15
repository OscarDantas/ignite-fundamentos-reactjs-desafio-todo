import { PlusCircle } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import styles from './styles.module.css'

interface CreateTaskProps {
  onCreateTask: (title: string) => void;
}

export function CreateTask({ onCreateTask }: CreateTaskProps) {
  const [title, setTitle] = useState("");

  function handleChangeTask(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function handleCreateTask() {
    if (title.length > 0) {
      onCreateTask(title);
      setTitle("");
    }
  }

  return (
    <div className={styles.container}>
      <input 
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={title}
        onChange={handleChangeTask}
      />
      <button 
        type="button" 
        onClick={handleCreateTask}
      >
        Criar <PlusCircle size={18} />
      </button>
    </div>
  )
}