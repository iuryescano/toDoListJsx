import { useState } from 'react'
import './App.css'
import rocketImage from '../assets/rocket.png'
import addon from '../assets/addon.png'
import clipboard from '../assets/Clipboard.png'
import { Task } from '../components/Task'

function App() {
  const [tasks, setTasks] = useState([
    {id: 1, text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."},
    {id: 2, text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."},
    {id: 3, text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames Teste."}
  ]);

  const [newTask, setNewTask] = useState("");


  function handleAddTask() {
    const task = [...tasks, {id: tasks.length + 1, text: newTask}];
    setTasks(task);
    console.log(task);
    setNewTask('');
    //console.log(tasks);
    //console.log(setTasks);
    //console.log(newTask);
    //console.log(setNewTask);
  }

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
              <input type="text" placeholder='Adicione uma nova tarefa' value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
            </div>
            <button className='createButton' onClick={handleAddTask}>
                Criar 
                <img src={addon} alt="botao de adicioonar" />
            </button>
          </div>
          <div className='content'>
            <div className='titles'>
              <div className='tasksCreated'>
                <p className='Created'>Tarefas criadas </p><p className='numbers'>{tasks.length}</p>
              </div>
              <div className='tasksConclude'>
                <p className='Conclude'>Concluidas </p><p className='numbers'>2 de 5</p>
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
                    <Task key={task.id} id={task.id} title={task.text} />
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
