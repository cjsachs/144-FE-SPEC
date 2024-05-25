import TaskList from "./TaskList"
import { Task } from "./models/task"

const App = () => {
  const tasks: Task[] = [
    {id: 1, title: 'Task 1', description: 'this is task 1', status: 'OPEN'},
    {id: 2, title: 'Task 2', description: 'this is task 2', status: 'IN_PROGRESS'},
    {id: 3, title: 'Task 2', description: 'this is task 3', status: 'CLOSED'}
  ]

  return (
    <div>
      {tasks.map((task) => (
        <TaskList {...task}/>
      ))}
    </div>
  )
}
export default App