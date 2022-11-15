import todoLogo from '../../assets/todo-logo.svg'

import styles from './styles.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logotipo do ToDo List" />
    </header>
  );
};
