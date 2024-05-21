import { MouseEvent } from "react"

interface ButtonProps {
    buttonClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const Button = (props: ButtonProps) => {
  return (
    <div>
        <button onClick={props.buttonClick}>Click Me</button>
    </div>
  )
}
export default Button