import { evaluate } from 'mathjs';
import { useState } from 'react';
import './App.css';


const App = () => {
  const buttons = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"]
  const operators = ["*", "/", "+", "C", "DEL", "="]
  const [display, setDisplay] = useState("");
  
  const numHandler = (value) => {
      setDisplay(display + value)
  }

  const opHandler = (value) => {
    if (value === operators.includes(value) && operators.includes(display.slice(-1))) {
      return;
    } else if (value === "=") {
      setDisplay(evaluate(display))
    } else if (value === "C") {
      setDisplay("")
    } else if(value === "DEL") {
      const del = display.slice(0, -1);
      setDisplay(del);
  } else {
    setDisplay(display + value)
  }
}

  return (
    <div>
      <div>
        <h2 className="display">{display}</h2>
        <div className="numbers">
        {buttons.map((button, index) => {
          return <button key={index} onClick={() => numHandler(button)} >{button}</button>
        })}
        </div>
        <div className="operators" >
        {operators.map((operator, index) => {
          return <button key={index} onClick={() => opHandler(operator)} >{operator}</button>
        })}
      </div>
    </div>
    </div>
  )
}

export default App;
