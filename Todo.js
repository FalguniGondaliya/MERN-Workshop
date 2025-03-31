import React, { useState } from "react";

const Todo = () => {
  const [mydata, setMydata] = useState([]);
  const [txt1, setTxt1] = useState("");

  const addData = () => {
    if (txt1.trim()) {
      setMydata([...mydata, txt1]);
      setTxt1("");
    }
  };

  const removeAll = () => {
    setMydata([]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Todo List</h1>
      <input
        type="text"
        value={txt1}
        onChange={(e) => setTxt1(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addData}>Add</button>
      {mydata.length > 0 && <button onClick={removeAll} style={{ marginLeft: "10px" }}>Remove All</button>}

      <ul>
        {mydata.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
