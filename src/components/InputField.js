import React from "react";
// import '../styles/StatisticsStyle.css'
function InputField({ status, start, handleKeyDown, currInput, setCurrInput }) {
  

  // useEffect(() => {
  //   textInput.current.focus();
  // }, []);

  return (
    <input
      
      disabled={status === "finished"}
      onClick={start}
      type="text"
      className="input"
      onKeyDown={handleKeyDown}
      style={{
        textAlign: "center",
        fontSize: 30,
        fontWeight: 400,
        padding: 20,
        borderRadius: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "none",
        width: "100%",
        backgroundColor:'#ffffffed',
      }}
      placeholder="Click here & Start Typing"
      value={currInput}
      onChange={(e) => setCurrInput(e.target.value)}
    />
  );
}

export default InputField;
