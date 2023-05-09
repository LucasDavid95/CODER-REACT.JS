import { useState } from "react";
import CounterPresentation from "./CounterPresentation";

const CounterContainer = ({ stock, onAdd }) => {
  const [counter, setCounter] = useState(0);

  const substract = () => {
    setCounter(counter - 1);
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
