import { useState } from "react"
import AuthExample from "./components/AuthExample"
import ItemComponent from "./components/ItemComponent"
import ThemeContext from "./context/ThemeContext"
import ThemeProvider from "./context/ThemeProvider"
import ParentComponent from "./callbacks/ParentComponent"
import CounterCallbackComponent from "./callbacks/CounterCallbackComponent"

const App = () => {
  const [theme, setTheme] = useState<string>('light')
  const [count, setCount] = useState<number>(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }
  
  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeProvider/>
      </ThemeContext.Provider>
      
      <div>
        <h1>Counter Callback</h1>
        <p>Count: {count}</p>
        <CounterCallbackComponent onIncrement={handleIncrement} onDecrement={handleDecrement}/>
      </div>
    </div>
  )
}
export default App