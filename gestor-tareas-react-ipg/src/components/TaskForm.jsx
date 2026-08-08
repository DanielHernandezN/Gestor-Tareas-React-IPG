import { useState } from 'react'

function TaskForm () {

    const [texto, setTexto] = useState('')
        

    return (
        <form>
            <input
                value={texto}
                onchange={(e) => setTexto(e.target.value)}
            />
            <button>Agregar</button>
        </form>
    )   
}

export default TaskForm