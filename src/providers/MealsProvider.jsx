import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const todayMeals = [
  "Baked Beans",
  "Baked Sweet Potatos",
  "Baked Potatoes",
  "JJJ",
  "III",
];

// FOR PROVIDING PART
// get data
const MealsContext = createContext();

// update data
const MealsUpdateContext = createContext();
let k = 1;

// provider
const MealsProvider = ({ children }) => {
  const [meals, setMealsList] = useState(todayMeals);

  function updateMealsList() {
    setMealsList((previousArr) => (previousArr.slice(0, -1)));

    // const copyArr = [...meals];
    // copyArr.pop();
    // setMealsList(copyArr);
  }

  return (
    <MealsContext.Provider value={meals}>
      <MealsUpdateContext.Provider value={updateMealsList}>
        {children}
      </MealsUpdateContext.Provider>
    </MealsContext.Provider>
  );
};

// FOR CONSUMING PART
// get data
export const useMealsListContext = () => useContext(MealsContext);

// update data
export const useMealsUpdateContext = () => useContext(MealsUpdateContext);

export default MealsProvider;
