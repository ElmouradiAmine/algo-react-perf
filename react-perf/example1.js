import React, { useEffect, useState } from "react";


// BAD EXAMPLE:
//There is a memory leak here with the setInterval, each time we refresh the app, the previous setInterval won't
// be closed, and another setInterval will run. That means we will have unnecessary and multiple setInterval running
// in the background and it will hurt the app performance.

const CounterBadExample = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
        setCounter(prevState => prevState + 1);
    }, 50);
  });
  
  return <p>{counter}</p>;
};

// SOLUTION EXAMPLE:
// To solve this problem we need to add in useEffect, a function that will clear out the ressources.
// In our example we used clearInterval to stop setInterval from running when we refresh our app.
const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
        setCounter(prevState => prevState + 1);
    }, 50);
    return () => {
      clearInterval(intervalID);
    }
  });
  
  return <p>{counter}</p>;
};



