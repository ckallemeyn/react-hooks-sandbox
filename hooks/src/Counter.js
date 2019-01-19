import React, { useState, useEffect } from 'react';
import './Counter.css'
// counter example using useState react Hook
function Counter({ name, initValue }) {
  const [count, setCount] = useState(initValue);

  useEffect(() => {
    document.title = `look here! ${count}`;
  });

  return (
    <div className="count">
      <p>Hi my name is {name}, and I can count to {count}</p> <br/>
        <button className="reset" onClick={()=> setCount(initValue)}> Reset </button>
        <button className='counts' onClick={() => setCount(count + 1)}> + </button>
        <button className='counts' onClick={() => setCount(count - 1)}> - </button>
    </div>
  );
}
export default Counter;
/*
*  useState:
* const [state, setState] = useState(initialState);
* state - is any state that is passed into useState as the initial state value
* setState - is a function that allows you to change the initial state value
* useState - is the basic built in Hook from react
*/

/*
*  useEffect
* takes the place of componentDidMount and ComponentDidUpdate
*/