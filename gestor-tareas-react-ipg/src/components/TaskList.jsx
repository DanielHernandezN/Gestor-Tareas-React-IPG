import { useState } from 'react'

function TaskList({ tareas, eliminarTarea, modificarTarea }) {

    const [indiceEditando, setIndiceEditando] = useState(null)
    const [textoEditado, setTextoEditado] = useState('')

    return (
        <ul className="w-full max-w-xl space-y-3">
            {tareas.map((tarea, index) => (
                <li
                    key={index}
                    className="flex items-center justify-between gap-3 border rounded-lg px-4 py-2"
                >

                    <div className="flex-1">
                        {index === indiceEditando ? (
                            <input
                                className="w-full border rounded px-3 py-1"
                                value={textoEditado}
                                onChange={(e) => setTextoEditado(e.target.value)}
                            />
                        ) : (
                            tarea
                        )}
                    </div>

                    <div className="flex gap-2">

                        {index === indiceEditando && (
                            <button
                                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
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
                        )}

                        <button
                            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                            onClick={() => {
                                setIndiceEditando(index)
                                setTextoEditado(tarea)
                            }}
                        >
                            Editar
                        </button>

                        <button
                            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                            onClick={() => eliminarTarea(index)}
                        >
                            Eliminar
                        </button>

                    </div>
                </li>
            ))}
        </ul>
    )
}

export default TaskList