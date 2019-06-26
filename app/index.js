import React from 'react';
import ReactDOM from 'react-dom';

class IndexComponent extends React.Component {
  render() {
    return <h1>hello world!!!</h1>
  }
}
const oBox = document.getElementById("box");
console.log("12312")
ReactDOM.render(<IndexComponent/>, oBox)
