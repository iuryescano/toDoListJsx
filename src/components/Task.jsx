import styles from './Task.module.css';
import { GoTrash } from "react-icons/go";

export function Task ({title}) {

  return (
    <div className={styles.Task}>
      <div className={styles.Content}>
        <input type="checkbox" id="checkbox" className={styles.checkbox} />
        <label htmlFor="checkbox" className={styles.checkboxLabel}></label>
        <p>{title}</p>
      </div>
      <button className={styles.removeButton}>
        <GoTrash />
      </button>
    </div>
  )
}