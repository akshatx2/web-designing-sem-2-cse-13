import React,{useState} from 'react'
function Mycounter() {
    let [counter,setCounter]=useState(0);
    const incre=()=>setCounter(counter+1);
    const decre=()=>setCounter(counter-1);
    const reset=()=>setCounter(0);
  return (
    <div className="block">
        <h1>React Counter Application</h1>
        <h1>{counter}</h1>
        <button onClick={incre}>Increment(+)</button>
         <button onClick={decre}>Decrement(-)</button><br></br>
          <button onClick={reset}>Reset</button>
    </div>
  )
}
export default Mycounter