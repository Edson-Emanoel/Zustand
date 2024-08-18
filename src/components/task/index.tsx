import TaskItem from "./item";
import { FormEvent, useState } from "react"
import { useTaskStore } from "../../store/task";
import "./styles.css";

export default function TaskList() {
    const [newTask, setNewTask] = useState("");

    const { tasks, addTask, changeSlogan } = useTaskStore();

    const handleAddTask = (e: FormEvent) => {
        e.preventDefault();

        addTask(newTask);

        setNewTask('');
    }

    return (
        <main>
            <span className="mx-3">Você tem {tasks.length} tarefas em aberto</span>
            
            <form onSubmit={handleAddTask} className="d-flex flex-column gap-3">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Digite uma tarefa"
                    className="form-control mx-3"
                />
                
                <div className="row gap-2 mx-3">
                    <button type="submit" className="btn btn-success col-2">Cadastrar</button>
                    <button type="button" onClick={changeSlogan} className="btn btn-primary col-2">Trocar Title</button>
                </div>
            </form>

            <TaskItem />
        </main>
    )
}
