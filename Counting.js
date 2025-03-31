import React from "react";
function Counting(){
    const[name, setName] = React.useState("")
    const[counter, setCounter] = React.useState(0)
    const[incr, setincr] = React.useState(10)
    const[dicr, setdicr] = React.useState(10)
    const[color, setcolor] = React.useState("green")
   
        return(<>
        <h1>
            Counter
        </h1>
        Value is {counter}
        <hr/> 
        <input type="button" value="+"  onClick={()=> setincr(10)} />
        value is {incr}
        <input type="button" value="-" onClick={()=> setdicr(0)} />
        value is {dicr}
        <input type="button" value="color" onClick={()=>setcolor("pink")}/>
        color is {color}
        Name:<input type="text" onClick={(e)=>setName(e.target.value)}/>
        Name is {name}
            </>)
    }

export default Counting