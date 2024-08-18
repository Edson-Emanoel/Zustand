import './item.css'
import { useTaskStore } from "../../store/task";

export default function TaskItem() {
  
    const { tasks, removeTask, editTask } = useTaskStore();

    return (
    <ul className='container mt-3'>
        {tasks.map((task) => (
            <li key={task.id}>
                <p>{task.text}</p>

                <div className='d-flex gap-2'>
                    <button className='btn btn-danger' onClick={() => removeTask(task.id)}><i className="fa-solid fa-trash"></i></button>
                    <button className='btn btn-warning' onClick={() => editTask(task.id, prompt("Novo nome da Tarefa: ", task.text) || task.text )}><i className="fa-solid fa-pen-to-square"></i></button>
                </div>
            </li>
        ))}
    </ul>
  )
}
