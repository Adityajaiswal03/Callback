
import './App.css';
import React, { useState,useCallback } from 'react';
function App() {
  const [input,setInput] = useState('');
  const [count, setCount] = useState(0);
  const increament = useCallback(() => {
      setCount(count + 1);
  }, [count]);
  return (
      <div className="App">
          <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
          ></input>
          <button onClick={increament}>Increament Counter</button>
          <h3>Input Text:{input}</h3>
          <h3>Count:{count}</h3>
          <hr></hr>

          <ChildComponent count={count} onClick={increament}/>
      </div>
  );
}
const ChildComponent = React.memo(({count,onClick}) => {
  console.log("rerendered Child");
  return(
    <div>
      <h3>Child Component</h3>
      <h3>Count:{count}</h3>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
});
export default App;
