import React from "react";
import cross from "../styles/cancel.png";

function TimeOverPopup(props) {
  const restart = props.handlerestart;
  return (
    <div
      style={{
        backgroundColor: "#b58eee",
        padding: 20,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
       
      }}
    >
      <img
        src={cross}
        onClick={restart}
        style={{
          height: 24,
          width: 24,
          position: "absolute",
          top: 3,
          right: 3,
      
        }}
        alt="cross"
      />
      Time is up! Click the button to restart.
    </div>
  );
}

export default TimeOverPopup;
