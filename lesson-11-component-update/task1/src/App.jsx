import React from "react";
import Numbers from './Numbers';
import EvenNumbers from "./EvenNumbers";
import OddNumbers from "./OddNumbers";
class App extends React.Component {
  state = {
    number: 0,

  }


  render() {
    return (
      <div className="app">
        <Numbers number='17' />

      </div>
    )
  }
}
export default App;