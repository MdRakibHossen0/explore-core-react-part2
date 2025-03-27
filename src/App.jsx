import "./App.css";
import button from "./function";
import Counter from "./counter";
import Batsman from "./Batsman";
import Bollar from "./Bollar";
import Users from "./Users";
import { Suspense } from "react";
import Friends from "./Friends";
 


 


const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())

const fetchFriends = async() =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json();

}

const fetchPosts = async()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts") 
  return res.json()
      

}



function App() {
  //async await korle ei line add korte hobe
const fetchPromise = fetchFriends()
const postPromise = fetchPosts()

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

      <Suspense fallback={<h3>friends are coming.....</h3>}>
        <Friends fetchPromise={fetchPromise}></Friends>
      </Suspense>

      <Suspense fallback={<h3>loading....</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

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
