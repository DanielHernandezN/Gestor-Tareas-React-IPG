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
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-slate-100 px-4">
      <h1 className= "text-4xl font-bold"     
      >Gestor de Tareas</h1>

      <p className="text-gray-600">
      Tareas registradas: {tareas.length}
      </p>

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