import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import ModeToggler from "../components/ModeToggler";
import Heading from "../components/USHook";
import {
  useMealsListContext,
  useMealsUpdateContext,
} from "./providers/MealsProvider";
import "./App.css";

function App() {
  // function handleClick() {
  //   setWord("Drink");
  // }

  // USE STATE
  // const [word, setWord] = useState("Eat");

  // USE CONTEXT
  const meals = useMealsListContext();
  // console.log(meals);

  const removeMeals = useMealsUpdateContext();

  return (
    <>
      {/* <Header name={"strange"} color={"purple"} />
    <Main greet={"Howdy"} />
    <Sidebar greet={"Hi"} /> */}
      {/* <ModeToggler/> */}

      {/* USE STATE */}
      {/* <Heading message={word + " at Little Lemon"} />
    <button onClick={handleClick}>Click here</button> */}

      {/* USE CONTEXT  */}
      <div>
        <h1>Meals List using Context API</h1>
        {meals.map((meal, index) => {
          return <h2 key={index}>{meal}</h2>;
        })}
        <button onClick={removeMeals}>Remove</button>
      </div>
    </>
  );
}

export default App;

// <div>
//   <a href="https://vitejs.dev" target="_blank">
//     <img src={viteLogo} className="logo" alt="Vite logo" />
//   </a>
//   <a href="https://react.dev" target="_blank">
//     <img src={reactLogo} className="logo react" alt="React logo" />
//   </a>
// </div>
// <h1>Vite + React</h1>
// <div className="card">
//   <button onClick={() => setCount((count) => count + 1)}>
//     count is {count}
//   </button>
//   <p>
//     Edit <code>src/App.jsx</code> and save to test HMR
//   </p>
// </div>
// <p className="read-the-docs">
//   Click on the Vite and React logos to learn more
// </p>
