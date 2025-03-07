import React from "react";

function CountDown(props) {
  return (
    <div
      style={{
        fontSize:25,
        color:'#03fcad',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2> {props.timer}</h2>
    </div>
  );

  
}

export default CountDown;
