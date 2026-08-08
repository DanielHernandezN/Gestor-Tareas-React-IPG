import {useState} from 'react'

function TaskList({tareas, eliminarTarea, modificarTarea}){

    const [indiceEditando, setIndiceEditando] = useState(null)
    const [textoEditado, setTextoEditado] = useState('')

    return (
        <ul className="w-full max-w-xl space-y-3">
            {tareas.map((tarea, index) => (
                <li key={index} 
                className="
                flex 
                items-center 
                gap-2 
                border 
                rounded-lg px-4 py-2 
                justify-between">
                    { index === indiceEditando ? (
                    <>
                    <input
                    className="border rounded px-3 py-1"
                    value={textoEditado}
                    onChange={(e) => setTextoEditado(e.target.value)}
                    />

                    <button
                    className="bg-green-600 text-white px-3 py-1 rounded"
                    onClick={() => {
                            if (textoEditado.trim() === '') {
                                return
                            }
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

                    <button
                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                        onClick={() => { 
                            setIndiceEditando(index)
                            setTextoEditado(tarea)
                        }}>
                            Editar
                        </button>                        

                    <button
                        className="bg-red-600 text-white px-3 py-1 rounded"
                        onClick={() => eliminarTarea(index)}>
                        Eliminar
                        </button>
                </li>
            ))}
        </ul>
    )
}

export default TaskList