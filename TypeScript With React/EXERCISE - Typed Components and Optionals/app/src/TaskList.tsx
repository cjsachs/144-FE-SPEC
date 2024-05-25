import { Task } from "./models/task";

const TaskList = (props: Task) => {
  return (
    <div>
        <h1>{props.title}</h1>
        <p>{props.description || 'No description'}</p>
        <p>{props.status}</p>
    </div>
  )
}
export default TaskList