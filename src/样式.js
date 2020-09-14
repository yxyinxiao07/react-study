import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";

let root = document.getElementById("root");
let red = "bgRed";
let img = "https://www.baidu.com/img/flexible/logo/pc/result.png";
let newstyle = {
  background: "skyblue",
  borderBottom: "1px solid red",
};
let newclass1 = "abc";
let newclass2 = ["abc", "bgRed"].join(" ");
let element = (
  <div>
    <img src={img} alt=""/>
    <h1 className={red}>{1 + 1}</h1>
    <h1 style={{ background: "pink" }}>{2 + 1}</h1>
    <h1 style={newstyle}>{1 + 1}</h1>
    <h1 style={{ background: "pink" }} className={newclass1}>
      {2 + 1}
    </h1>
    <h1 className={"bgRed"}>{2 + 1}</h1>
    <h1 className={"bgRed " + newclass1}>{2 + 1}</h1>
    <h1 className={newclass2}>{2 + 1}</h1>
  </div>
);
ReactDOM.render(element, root);
