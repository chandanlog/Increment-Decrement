import React, { useState } from "react";

const Increment = () =>{
    const [num, setNum] = useState(0);
    const incNum = () =>{
    setNum(num+1);
  };
    
    return(
        <div className="button_div">
            <h1>{num}</h1>
            <button onClick = {incNum}>Increment</button>
        </div>
    )
}
export default Increment; 