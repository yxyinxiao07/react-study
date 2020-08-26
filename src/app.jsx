import React from "react";
import Nav from "./nav";

class App extends React.Component {
  render() {
    var msg = ['视频','音乐','英语','美术']
    return  (
      <div>
        <h1>123</h1>
        <Nav navlist={msg}/>
      </div>
    )
  }
}

export default App