import {useState} from 'react'

function TaskList({tareas, eliminarTarea, modificarTarea}){

    const [indiceEditando, setIndiceEditando] = useState(null)
    const [textoEditado, setTextoEditado] = useState('')

    return (
        <ul>
            {tareas.map((tarea, index) => (
                <li key={index}>
                    { index === indiceEditando ? (
                    <>
                    <input
                    value={textoEditado}
                    onChange={(e) => setTextoEditado(e.target.value)}
                    />

                    <button
                    onClick={() => {
                        modificarTarea(index, textoEditado)
                        setIndiceEditando(null)
                    }}
                    >
                    Guardar 
                    </button>
                    </>
                    ):(
                    tarea
                )}

                    <button onClick={() => { 
                        setIndiceEditando(index)
                        setTextoEditado(tarea)
                        }}>
                            Editar
                        </button>                        

                    <button onClick={() => eliminarTarea(index)}>
                        Eliminar
                        </button>
                </li>
            ))}
        </ul>
    )
}

export default TaskList