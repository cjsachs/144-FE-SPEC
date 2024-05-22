interface ChildProps {
  buttonClick: (message: string) => void;
}

const ChildComponent = ({ buttonClick }: ChildProps) => {
  const handleClick = () => {
    buttonClick('Hello from the child component!');
  };
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
export default ChildComponent;
