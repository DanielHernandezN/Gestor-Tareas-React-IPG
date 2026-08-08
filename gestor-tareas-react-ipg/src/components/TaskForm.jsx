import { useState } from 'react'

function TaskForm ({agregarTarea}) {
    const [texto, setTexto] = useState('')

function manejarSubmit(e) {
    e.preventDefault()
        if (texto.trim() ==='') {
            return
        }
    agregarTarea(texto)
    setTexto('')
    }
        
    return (
        <form className="flex gap-2" onSubmit={manejarSubmit}>
            <input
                className="border rounded-lg px-4 py-2"
                placeholder="Ingrese una tarea"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Agregar
            </button>
        </form>
    )   
}

export default TaskForm