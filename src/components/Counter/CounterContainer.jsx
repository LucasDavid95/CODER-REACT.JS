import { useEffect, useState } from "react";
import CounterPresentation from "./CounterPresentation";

const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  const [counter, setCounter] = useState(initial);

  useEffect(() => {
    setCounter(initial);
  }, [initial]);

  const substract = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const add = () => {
    counter < stock ? setCounter(counter + 1) : alert("Max");
  };

  return (
    <div>
      <CounterPresentation
        counter={counter}
        substract={substract}
        add={add}
        onAdd={onAdd}
      />
    </div>
  );
};

export default CounterContainer;
