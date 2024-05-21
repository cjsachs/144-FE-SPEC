import { Person, ProfileProps } from "./models/Person"
import PersonComponent from "./components/PersonComponent"
import Status from "./components/Status"
import Header from "./components/Header"
import NestedComponent from "./components/NestedComponent"
import Button from "./components/Button"

const App = () => {

  const instructor: Person = {
    name: 'christian',
    age: 99,
    email: 'csachs@ct.com'
  }

  const profileData: ProfileProps = {
    person: instructor,
    message: 'hello my name is christian'
  }

  const handleClick = () => {
    console.log('clicked')
  }


  return (
    <div>
      <PersonComponent {...profileData}/>
      <Status/>
      
      <Header children="i am a child"/>

      <NestedComponent>
        <h3>I am a child component</h3>
        <Status/>
      </NestedComponent>

      <Button buttonClick={handleClick}/>
    </div>
  )
}
export default App