import { useState } from 'react'
import TaskForm from './components/TaskForm'


function App() {

  const [tareas, setTareas] = useState([])
    function agregarTarea(nuevaTarea) {
    setTareas([...tareas, nuevaTarea])
  }

  return ( 
    <main>
      <h1>Gestor de Tareas</h1>
      <TaskForm />
    </main>

  )
}

export default App
