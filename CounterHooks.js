import React from "react";
function CounterHooks(){
    const [counter,setCounter]=React.useState(0)
    const [msg,setMsg]=React.useState("")

    const incrementData =() => {
        if (counter >= 10) {
            setMsg("Gratarthan 10")
        }else{
            setCounter(counter + 1)
            setMsg("")
        }
    }

    const decrementData =() => {
        if (counter <= 0) {
            setMsg(" not allowed lessthan 0")
        }else{
            setCounter(counter - 1)
            setMsg("")
        }
    }
  return(<>
  
  <h1>{counter}</h1>
  <input type="button" value="increment" onClick={incrementData}/>
  <input type="button" value="decrement" onClick={decrementData}/>
  <input type ="button"  value="X" onClick={()=>setCounter(0)}/>
  {msg}
  </>)  
}
export default CounterHooks