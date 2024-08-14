import React from "react";

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggler: 'Off'
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({//використовуємо попередній стан стейту
      toggler: prevState.toggler === 'Off' ? 'On' : 'Off'
    }))
  }

  render() {
    return (
      <div className="toggler" onClick={this.toggle}>
        {this.state.toggler}
      </div>
    )
  }
}
export default Toggler;