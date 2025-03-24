import styles from './Task.module.css';
import { GoTrash } from "react-icons/go";
import { useState } from 'react';

interface TaskProps {
  id: number;
  title: string;
  onDeleteTask: (task: number) => void;
}

export function Task({ id, title, onDeleteTask}: TaskProps) {
  const [isSublined, setSublinedText] = useState(false);

  const handleSublineText = ( ) => {
    setSublinedText(!isSublined);
  }

  return (
    <div className={styles.Task}>
      <div className={styles.Content}>
        <input type="checkbox" id={`checkbox-${id}`} className={styles.checkbox} onClick={handleSublineText} />
        <label htmlFor={`checkbox-${id}`} className={styles.checkboxLabel}></label>
        <p className={isSublined ? styles.sublined : ''}>{title}</p>
      </div>
      <button className={styles.removeButton} onClick={() => onDeleteTask(id)}>
        <GoTrash />
      </button>
    </div>
  )
}