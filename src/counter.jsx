import { useState } from "react";

export default function Counter(){
    const [count , setCount] = useState(0);
    const CounterStyle ={
        border: '2px solid blue'
    }

    const handleAdd = (code) =>{

        const newCount = count + 1;

        setCount(newCount);

    }
    return (
      <div style={CounterStyle}>
        <h3>Counter: {count} </h3>
        <button onClick={() => handleAdd("R1")}>Add </button>
      </div>
    );
}