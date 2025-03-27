import "./App.css";
import button from "./function";
import Counter from "./counter";
import Batsman from "./Batsman";
import Bollar from "./Bollar";

function App() {
  function handleClick() {
    alert("ok");
  }
  const handleClick2 = () => {
    alert("click 2");
  };

  const handleAdd4 = (num) => {
    const newNum = num + 15;
    alert(newNum);
  };

  const myFunction = (money) => {
    const name = money + 10;
    alert(name);
  };

  return (
    <>
      <h3>Vite + React</h3>
      <Bollar></Bollar>
      <Batsman></Batsman>
      <Counter></Counter>
      {/* <button onClick="handleClick">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={function handleClick() {
          alert("click extra");
        }}
      >
        Extra Function
      </button>

      <button onClick={handleClick2}>Click Me2</button>
      <button onClick={() => alert("click 3")}>Click Me3</button>
      <button onClick={() => handleAdd4("RAKIB")}>Click Add 4</button>
      <button onClick={() => myFunction(10)}>button 5</button>
      <button onClick={() => button(30)}>(export function) (import App)</button>
    </>
  );
}

export default App;
