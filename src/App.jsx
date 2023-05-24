import { useReducer, useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import ModeToggler from "../components/ModeToggler";
import Heading from "../components/USHook";
import ToDo from "../components/URToDo";
import {
    useMealsListContext,
    useMealsUpdateContext,
} from "./providers/MealsProvider";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "../components/HomePage";
import AboutMe from "../components/AboutMe";

// USE CONTEXT
const todayFruits = ["apple", "banana", "carrot", "durain"];

// USE REDUCER
const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
};
function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return {
                count: state.count + 1,
            };
        case ACTIONS.DECREMENT:
            return {
                count: state.count - 1,
            };
        default:
            return state;
    }
}

function App() {
    // function handleClick() {
    //   setWord("Drink");
    // }

    // USE STATE
    // const [word, setWord] = useState("Eat");

    // USE CONTEXT
    // const meals = useMealsListContext();

    // const removeMeals = useMealsUpdateContext();

    // const [fruits, setFruits] = useState(todayFruits);

    // const removeFruitHandler = () => {
    //   setFruits((prevFruits) => {
    //     const copyArr = [...prevFruits];
    //     copyArr.pop();
    //     return copyArr;
    //   });
    //   console.log(fruits);
    // };

    // const removeSpecific = (i) => {
    //   setFruits((prevFruits) =>
    //     prevFruits.filter((item) => item != prevFruits[i])
    //   );
    // };

    // const onClickHandler = () => {
    //   alert("heegh");
    // };

    // USE REDUCER
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    function increment() {
        dispatch({ type: ACTIONS.INCREMENT });
    }

    function decrement() {
        dispatch({ type: ACTIONS.DECREMENT });
    }

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
            {/* <div>
        <h1>Meals List using Context API</h1>
        {meals.map((meal, index) => {
          return <h2 key={index}>{meal}</h2>;
        })}
        <button onClick={removeMeals}>Remove</button>
      </div>

      <div>
        {fruits.map((fruit, index) => {
          return (
            <h2 key={index} onClick={() => removeSpecific(index)}>
              {fruit}
            </h2>
          );
        })}

        <button onClick={removeFruitHandler}>Remove Fruit</button>
      </div> */}

            {/* USE REDUCER */}
            {/* <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button> */}

            {/* <ToDo /> */}

            {/* REACT ROUTER */}
            <div className="App">
                <nav className="nav">
                    <Link to="/" className="nav-item">HomePage</Link>
                    <Link to="/about-me" className="nav-item">About me</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about-me" element={<AboutMe />} />
                </Routes>
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
