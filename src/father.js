import React from "react";
import ReactDOM from "react-dom";
import Son from './son';

let root = document.querySelector("#root");
function Father(props) {
  var msg = ['视频','音乐','英语','美术']
  return (
    <div>
      <p>{props.mssg}</p>
      函数式组件
      <br></br>
      <Son navlist={msg}/>
    </div>
  );
}
ReactDOM.render(<Father mssg="123" />, root); //父传子