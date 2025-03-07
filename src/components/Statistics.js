import React from "react";
import "../styles/StatisticsStyle.css";

function Statistics({ wpm, correct, incorrect }) {
  const accuracy =
    correct !== 0 ? Math.round((correct / (correct + incorrect)) * 100) : 0;

  return (
    <div
      className="wide-div"
      style={{
        backgroundColor: "#000000cc",
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "1px 2px 3px 4px rgba(20,20,20,0.4)",
        color:'white'
      }}
    >
      <h1 style={{color:'#fcba03',}}>Statistics</h1>
      <div className="column-div">
        <p className="label" style={{color:'white',fontSize:20}}>Words per minute:</p>
        <p className="value" style={{fontSize:20}}>{wpm}</p>
      </div>
      <div className="column-div">
        <p className="label" style={{color:'white',fontSize:20}}>Accuracy:</p>
        <p className="value" style={{fontSize:20}}>{accuracy}%</p>
      </div>
      <div className="column-div">
        <p className="label" style={{color:'white',fontSize:20}}>Correct Words:</p>
        <p className="value" style={{fontSize:20}}>{correct}</p>
      </div>
      <div className="column-div">
        <p className="label" style={{color:'white',fontSize:20}}>Incorrect Words:</p>
        <p className="value" style={{fontSize:20}}>{incorrect}</p>
      </div>
    </div>
  );
}

export default Statistics;
