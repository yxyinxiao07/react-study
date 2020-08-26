import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './App.css';

{/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */}


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


// function Clock(props) {
//   return (
//     <h1>现在是北京时间：{props.time.toLocaleTimeString()}</h1>
//   )
// }
// function run() {
//   ReactDOM.render(
//       <Clock time={new Date()} />,
//     document.getElementById('root')
//   );
// }
// setInterval(run, 1000);


let root = document.getElementById("root");
let red = 'bgRed';
let img = 'https://www.baidu.com/img/flexible/logo/pc/result.png';
let element = (
  <div>
    <img src={img}/>
    <h1 className={red}>{1 + 1}</h1>
  </div>
  );
ReactDOM.render(element, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
