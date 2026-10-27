import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card title="Leozinho"></Card>
    </>
  );
}

export default App;

interface IcardProps {
  title: string;
}

const Card = (props: IcardProps) => {
  return (
    <>
      <span>Title: {props.title}</span>
    </>
  );
};
