import clipboard from "../../assets/clipboard.svg";
import styles from "./styles.module.css";

export function EmptyTask() {
  return (
    <div className={styles.container}>
      <img src={clipboard} alt="Clipboard" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus items a fazer</span>
    </div>
  )
}