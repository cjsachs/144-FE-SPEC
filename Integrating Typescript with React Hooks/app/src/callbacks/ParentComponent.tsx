import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const handleChildClick = (message: string) => {
    console.log(`Message from child: ${message}`);
  };
  return (
    <div>
      <ChildComponent buttonClick={handleChildClick} />
    </div>
  );
};
export default ParentComponent;
