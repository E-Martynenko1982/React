import React from "react";
import Greeting from "./Greeting";
import Login from "./Login";
import Logout from "./Logout";

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
          ? <Logout onLogout={this.handleLogout} />
          : <Login onLogin={this.handleLogin} />}
      </div>
    )
  }
};
export default Auth;



//опиши компоненту Login которая принимает функцию для логина в свойстве onLogin и отображает кнопку для логина с текстом Login