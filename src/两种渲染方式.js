import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// let root = document.getElementById('root');
// let h1 = <h1>111<span>111</span></h1>;
// ReactDOM.render(h1,root);

// function clock() {
//   let time = new Date().toLocaleTimeString();
//   let element = <h1>现在是北京时间：{time}</h1>
//   let root = document.getElementById('root');
//   ReactDOM.render(element,root);
// }
// setInterval(clock, 1000);


function Clock(props) {
  return (
    <h1>现在是北京时间：{props.time.toLocaleTimeString()}</h1>
  )
}
function run() {
  ReactDOM.render(
      <Clock time={new Date()} />,
    document.getElementById('root')
  );
}
setInterval(run, 1000);