import React from "react";

class Child1 extends React.Component {
  //state不用构造
  state = { mind2: true };
  cilck2 = () => {
    this.setState({
      mind2: !this.state.mind2,
    });
  };
  render() {
    return (
      <div>
        <p onClick={this.cilck2}>{this.state.mind2 ? "开心" : "不开心"}</p>
      </div>
    );
  }
}

export default class State extends React.Component {
  constructor(props) {
    //state用构造
    super(props);
    this.state = { mind: true };
    // this.cilck = this.cilck.bind(this);
  }
  cilck() {
    this.setState({
      mind: !this.state.mind,
    });
  }
  render() {
    return (
      <div>
        <p onClick={this.cilck.bind(this)}>
          {this.state.mind ? "开心" : "不开心"}
        </p>
        <Child1 />
      </div>
    );
  }
}
