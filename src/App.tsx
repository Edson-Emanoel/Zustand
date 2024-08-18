import './App.css'
import TaskList from './components/task'
import { useTaskStore } from './store/task'

function App() {
  
  const { slogan } = useTaskStore();

  return (
    <div className="container mt-3">
      <h1 className='mx-3'>{slogan}</h1>
      <TaskList />
    </div>
  )
}

export default App
