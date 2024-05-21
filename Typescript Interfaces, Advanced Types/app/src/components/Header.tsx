interface HeaderProp {
    children: string
}

const Header = (props: HeaderProp) => {
  return (
    <div>{props.children}</div>
  )
}
export default Header