import { FormEvent, useState } from "react"
import TaskItem from "./item";
import { useTaskStore } from "../../store/task";

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
            <span>Você tem {tasks.length} tarefas em aberto</span>
            
            <form onSubmit={handleAddTask}>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Digite uma tarefa"
                />
                <button type="submit">Cadastrar</button>
                <button type="button" onClick={changeSlogan}>Trocar Title</button>
            </form>

            <TaskItem />
        </main>
    )
}
