import React from "react";

class Child1 extends React.Component {
  //即将废弃refs
  state = {};
  cilck = () => {
    console.log(this.refs.inputone.value);
  };
  blur = () => {
    console.log(this.refs.inputtwo.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref="inputone" />
        &nbsp;
        <input type="button" value="点我提示数据" onClick={this.cilck} />
        <input
          type="text"
          ref="inputtwo"
          placeholder="失去焦点提示"
          onBlur={this.blur}
        />
      </div>
    );
  }
}

class Child2 extends React.Component {
  //回调ref
  state = {};
  cilck = () => {
    console.log(this.inputone.value);
  };
  blur = () => {
    console.log(this.inputtwo.value);
  };
  render() {
    return (
      <div>
        {/* <input type="text" ref={input => {this.input = input;console.log(input);console.log(this.input);}}/>&nbsp; */}
        <input
          type="text"
          ref={(input) => {
            this.inputone = input;
          }}
        />
        &nbsp;
        <input type="button" value="点我提示数据" onClick={this.cilck} />
        <input
          type="text"
          ref={(input) => {
            this.inputtwo = input;
          }}
          placeholder="失去焦点提示"
          onBlur={this.blur}
        />
      </div>
    );
  }
}

class Child3 extends React.Component {
  //createRef
  myRef1 = React.createRef();
  myRef2 = React.createRef();

  cilck = () => {
    console.log(this.myRef1.current.value);
  };
  blur = () => {
    console.log(this.myRef2.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.myRef1} />
        &nbsp;
        <input type="button" value="点我提示数据" onClick={this.cilck} />
        <input
          type="text"
          placeholder="失去焦点提示"
          onBlur={this.blur}
          ref={this.myRef2}
        />
      </div>
    );
  }
}

export default class Ref extends React.Component {
  render() {
    return (
      <div>
        <Child1 />
        <Child2 />
        <Child3 />
      </div>
    );
  }
}
