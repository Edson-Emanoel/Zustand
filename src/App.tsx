import './App.css'
import TaskList from './components/task'
import { useTaskStore } from './store/task'

function App() {
  
  const { slogan } = useTaskStore();

  return (
    <>
      <h1>{slogan}</h1>
      <TaskList />
    </>
  )
}

export default App
