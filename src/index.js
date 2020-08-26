import React from "react";
import ReactDOM from "react-dom";
import './App.css';

let root = document.getElementById("root");
let newstyle = {
  background: "skyblue",
  borderBottom: "1px solid red"
};
let newxlass = 'abc';
let element = (
  <div>
    <h1 style={newstyle}>{1 + 1}</h1>
    <h1 style={{height:'200px',background:'pink'}}>{2 + 1}</h1>
    <h1 className={"bgRed "+newxlass}>{2 + 1}</h1>
  </div>
  );
ReactDOM.render(element, root);
