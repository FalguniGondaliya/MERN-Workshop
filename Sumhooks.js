import React from "react";
function Sumhooks(){
    const [data,setData] = React.useState({})
    const [ans,setAns] = React.useState()
    const dosum =() =>{
        var c = parseInt(data.no1) + parseInt(data.no2)
        setAns("sum is" + c)
    }
    const dosub =() =>{
        var c = parseInt(data.no1) - parseInt(data.no2)
        setAns("sum is" + c)
    }
    const domul =() =>{
        var c = parseInt(data.no1) * parseInt(data.no2)
        setAns("sum is" + c)
    }
    const dodiv =() =>{
        var c = parseInt(data.no1) / parseInt(data.no2)
        setAns("sum is" + c)
    }
    return(
        <>
        <h1>Sum</h1>
        No1:<input type="text" onChange={(e)=>setData({...data,no1:e.target.value})}/>
        <br/>
        No1:<input type="text" onChange={(e)=>setData({...data,no2:e.target.value})}/>
        <br/>
        <input type="button" value="Add" onClick={dosum}/> || 
        <input type="button" value="Subtracsion" onClick={dosub}/> || 
        <input type="button" value="Multiplecation" onClick={domul}/> || 
        <input type="button" value="Division" onClick={dodiv}/>  
        <br/>
        {ans}
        </>
    )
}
export default Sumhooks