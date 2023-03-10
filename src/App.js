import React, { useState } from "react";
import "./Style.css"


const App = ()=>{


  const [calc , setCalc ] = useState("");
  const [result , setResult ] = useState("");

  const ops = ['/' , '*' , '+', '-', '.'];

  const updateCal = value =>{
    if(
      ops.includes(value) && calc === ''||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ){
        return ;

    }
    setCalc(calc + value);

    if(!ops.includes(value)){
      setResult(eval(calc + value).toString())
    }
  }

    const createDigit = ()=>{
      const digit = [];
      for(let i=1;i<10;i++){
        digit.push(
          <button 
            onClick={()=> updateCal(i.toString())} 
            key={i}>
              {i}
          </button>
        )
      }
      return digit;
    }

    const claculate = ()=>{
      setCalc(eval(calc).toString());
    }

    const deleteLast = ()=>{
      if(calc === ""){
        return;
      }
      const value = calc.slice(0,-1);
      setCalc(value);
    }

  return(
    <div className="App">
      <div className="claculator">
        <div className="display">
          {result ? <span>({result})</span> : ''}
          
          {calc || "0"}

        </div>
        <div className="operator">
          <button onClick={()=> updateCal('+')} >+</button>
          <button onClick={()=> updateCal('-')} >-</button>
          <button onClick={()=> updateCal('/')}>/</button>
          <button onClick={()=> updateCal('*')}>*</button>
          <button onClick={deleteLast}>DEL</button>
        </div>

        <div className="digit">
          { createDigit()}

          <button onClick={()=> updateCal('0')}>0</button>
          <button onClick={()=> updateCal('.')}>.</button>
          <button onClick={claculate}>=</button>
        </div>

      </div>
    </div>
  )

}



export default App;