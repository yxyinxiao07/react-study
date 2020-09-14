import React from "react";
import ReactDOM from "react-dom";

let root = document.querySelector("#root");

function Children1() {
  return (
    <div>
      函数式组件
      <Children2 />
    </div>
  );
}
class Children2 extends React.Component {
  render() {
    return <div>类组件</div>;
  }
}
ReactDOM.render(<Children1 />, root);
