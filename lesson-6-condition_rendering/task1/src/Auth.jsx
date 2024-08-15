import React from "react";
import Greeting from "./Greeting";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true })
  };


  handleLogout = () => {
    this.setState({ isLoggedIn: false })
  };
  render() {

    return (

      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn
          ? <button onClick={this.handleLogout} className="btn logout">Logout</button>
          : <button onClick={this.handleLogin} className="btn login">Login</button>}
      </div>
    )
  }
};
export default Auth;