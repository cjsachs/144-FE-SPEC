import { ProfileProps } from "../models/Person"

const PersonComponent = ({person: {name, age, email}, message}: ProfileProps) => {
  return (
    <div>
        <h1>Person Details</h1>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>Email: {email || 'Email not provided'}</p>
        <p>Message: {message}</p>
    </div>
  )
}
export default PersonComponent