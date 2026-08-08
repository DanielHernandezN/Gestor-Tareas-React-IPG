import { useState } from 'react'

function TaskForm ({agregarTarea}) {
    const [texto, setTexto] = useState('')

function manejarSubmit(e) {
    e.preventDefault()
    agregarTarea(texto)
    setTexto('')
}
        
    return (
        <form onSubmit={manejarSubmit}>
            <input
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />
            <button>Agregar</button>
        </form>
    )   
}

export default TaskForm