import React from "react";

import Expand from "./Expand";



class App extends React.Component {
  state = {
    isOpen: false,
  }

  hideContent = () => {
    this.setState({ isOpen: false })
  }

  showContent = () => {
    this.setState({ isOpen: true })
  }
  // toggleExpand = () => {
  //   this.setState((prevState) => ({
  //     isOpen: !prevState.isOpen,
  //   }));
  // };
  render() {
    return (
      <Expand isOpen={this.state.isOpen}
        title='Some title'
        onShow={this.showContent}
        onHide={this.hideContent}>
        <p>
          Hooks are a new addition in React 16.8. They let you use state and other React features
          without writing a class.
        </p>
      </Expand>
    );
  }
}
export default App;