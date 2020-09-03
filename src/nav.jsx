import React from "react";

class Child2 extends React.Component { //即将废弃refs
  state = {};
  cilck = ()=> {
    console.log(this.refs.inputone.value);
  };
  blur = ()=> {
    console.log(this.refs.inputtwo.value);
  };
  render() {
    return  (<div>
      <input type="text" ref="inputone"/>&nbsp;
      <input type="button" value="点我提示数据" onClick={this.cilck}/>
      <input type="text" ref="inputtwo" placeholder="失去焦点提示" onBlur={this.blur}/>
    </div>)
  }
}

class Child3 extends React.Component { //回调ref
  state = {};
  cilck = ()=> {
    console.log(this.inputone.value);
  };
  blur = ()=> {
    console.log(this.inputtwo.value);
  };
  render() {
    return  (<div>
      {/* <input type="text" ref={input => {this.input = input;console.log(input);console.log(this.input);}}/>&nbsp; */}
      <input type="text" ref={input => {this.inputone = input}}/>&nbsp;
      <input type="button" value="点我提示数据" onClick={this.cilck}/>
      <input type="text" ref={input => {this.inputtwo = input}} placeholder="失去焦点提示" onBlur={this.blur}/>
    </div>)
  }
}

class Child4 extends React.Component { //createRef
  myRef1 = React.createRef();
  myRef2 = React.createRef();

  cilck = ()=> {
    console.log(this.myRef1.current.value);
  };
  blur = ()=> {
    console.log(this.myRef2.current.value);
  };
  render() {
    return  (<div>
      <input type="text" ref={this.myRef1}/>&nbsp;
      <input type="button" value="点我提示数据" onClick={this.cilck}/>
      <input type="text" placeholder="失去焦点提示" onBlur={this.blur} ref={this.myRef2}/>
    </div>)
  }
}

class Child1 extends React.Component { //state不用构造
  state = {mind2 : true};
  cilck2 = ()=> {
    this.setState({
      mind2 : !this.state.mind2
    })
  };
  render() {
    return  (<div>
      <p onClick={this.cilck2}>{this.state.mind2 ? '开心' : '不开心'}</p>
    </div>)
  }
}

export default class Nav extends React.Component {
  constructor(props) {    //state用构造
    super(props);
    this.state = {mind : true};
    // this.cilck = this.cilck.bind(this);
  };
  
  cilck() {
    this.setState({
      mind : !this.state.mind
    })
  };
  render() {
    return  (<div>
      <p onClick={this.cilck.bind(this)}>{this.state.mind ? '开心' : '不开心'}</p>
      <Child1/>
      <Child2/>
      <Child3/>
      <Child4/>
      <ul>
        {//列表渲染
          this.props.navlist.map((item,index)=>{
          return <li key={index}>{item}</li>
          })
        }
      </ul>
    </div>)
  }
}