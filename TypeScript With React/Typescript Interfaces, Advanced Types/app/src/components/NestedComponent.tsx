import { ReactNode } from "react"

interface NestedComponentProp {
    children: ReactNode
}

const NestedComponent = (props: NestedComponentProp) => {
  return (
    <div>
        {props.children}
    </div>
  )
}
export default NestedComponent