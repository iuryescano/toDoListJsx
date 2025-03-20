import { useState } from 'react'
import './App.css'
import rocketImage from '../assets/rocket.png'
import addon from '../assets/addon.png'
import clipboard from '../assets/Clipboard.png'
import { Task } from '../components/Task'

function App() {
  const tasks = [
    {id: 1, text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."},
    {id: 2, text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."}
  ];

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
              <div>
                <p>Tarefas criadas </p><p>2</p>
              </div>
              <div>
                <p>Concluidas </p><p>2</p>
              </div>
            </div>
            {tasks.length === 0 ? (
              <div className='empty'>

                <img src={clipboard} alt="clipboard"></img>
                <p>Você ainda não tem tarefas cadastradas <br/>
                Crie tarefas e organize seus itens a fazer</p>
              </div>
              ) : (
                  tasks.map((task) => (
                    <Task key={task.id} title={task.text} />
                  ))
              )
            }
            </div>
        </main>
      </div>
    </>
  )
}

export default App
