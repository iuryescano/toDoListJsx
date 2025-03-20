import styles from './Task.module.css';
import { GoTrash } from "react-icons/go";
import { useState } from 'react';

export function Task ({title}) {
  const [isSublined, setSublinedText] = useState(false);

  const handleSublineText = () => {
//console.log(!isSublined); //significa que o texto não está sublinhado retorna true
//console.log(isSublined); //significa que o texto está sublinhado retorna false
    setSublinedText(!isSublined);//se o texto não estiver sublinhado, ele sublinha, se estiver sublinhado, ele desfaz a sublinha
  }

  return (
    <div className={styles.Task}>
      <div className={styles.Content}>
        <input type="checkbox" id="checkbox" className={styles.checkbox} onClick={handleSublineText}/>
        <label htmlFor="checkbox" className={styles.checkboxLabel}></label>
        <p className={isSublined ? styles.sublined : ''}>{title}</p>
      </div>
      <button className={styles.removeButton}>
        <GoTrash />
      </button>
    </div>
  )
}