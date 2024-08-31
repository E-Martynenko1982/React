import React from "react";
import Clock from "./Clock";
import './index.scss';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }
    this.toggle = this.toggle.bind(this);
  };

  toggle() {
    this.setState({
      visible: !this.state.visible
    })
  }


  render() {
    return (
      <>
        <button onClick={this.toggle}>Toggle</button>
        {this.state.visible && (
          <div>
            <Clock location='NEW YORK' offset={-5} />
            <Clock location='KYIV' offset={2} />
            <Clock location='LONDON' offset={0} />
          </div>
        )}
      </>
    )
  }
}
export default App