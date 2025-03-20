import { useState } from 'react'
import './App.css'
import rocketImage from '../assets/rocket.png'
import addon from '../assets/addon.png'
import clipboard from '../assets/Clipboard.png'
import { Task } from '../components/Task.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <header>
          <img src={rocketImage} alt="rocket" className='rocket' />
          <p className='to'>to</p>
          <p className='do'>do</p>
        </header>

        <main>
          <div className = 'search-task'>
            <div className='input-container'>
              <input type="text" placeholder='Adicione uma nova tarefa'/>
            </div>
            <button className='createButton'>
                Criar 
                <img src={addon} alt="botao de adicioonar" />
            </button>
          </div>
          <div className='content'>
            <div className='titles'>
              <p>Tarefas criadas <p>2</p></p>
              <p>Concluidas <p>2</p></p>
            </div>

            <div className='empty'>

              <img src={clipboard} alt="clipboard"></img>
              <p>Você ainda não tem tarefas cadastradas <br/>
              Crie tarefas e organize seus itens a fazer</p>
            </div>

            <Task title={"Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."}></Task>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
