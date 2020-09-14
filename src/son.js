import React from "react";

export default class Son extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {
            //列表渲染
            this.props.navlist.map((item, index) => {
              return <li key={index}>{item}</li>;
            })
          }
        </ul>
      </div>
    );
  }
}
