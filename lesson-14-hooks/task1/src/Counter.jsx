import React, { Component } from "react";
import './counter.scss';


const Counter = () => {
  const [counter, setCounter] = React.useState(0)

  const deCrement = () => {
    setCounter(counter - 1)
  }

  const inCrement = () => {
    setCounter(counter + 1)
  }
  return (
    <div className="counter">
      <button className="counter__button" onClick={deCrement}>-</button>
      <span className="counter__value">{counter}</span>
      <button className="counter__button" onClick={inCrement}>+</button>
    </div>
  )
};

// className Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: props.start
//     }

//     setInterval(() => {
//       this.setState({
//         counter: this.state.counter + 1
//       });

//     }, props.interval);
//   }
//   render() {
//     return (
//       <div classNameName="counter">
//         {this.state.counter}
//       </div>
//     )
//   }
// }
export default Counter;