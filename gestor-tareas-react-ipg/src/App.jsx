import { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'


function App() {

  const [tareas, setTareas] = useState([])

    function agregarTarea(nuevaTarea) {
    setTareas([...tareas, nuevaTarea])
    }

    function eliminarTarea(indiceEliminar) {
    setTareas(
    tareas.filter((tarea, index) => index !== indiceEliminar))
  }

    function modificarTarea(indiceModificar, nuevaTarea) {
    setTareas(
    tareas.map((tarea, index) => 
    index === indiceModificar ? nuevaTarea : tarea))
  }

  return ( 
    <main>
      <h1>Gestor de Tareas</h1>

      <TaskForm agregarTarea={agregarTarea} />
      
      <TaskList 
      tareas={tareas} 
      eliminarTarea={eliminarTarea}
      modificarTarea={modificarTarea}
      />
    </main>

  )
}

export default App