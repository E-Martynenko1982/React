import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import Spinner from "./Spinner";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isLoading: false
    }
  }
  handleLogin = () => {
    this.setState({ isLoading: true })

    setTimeout(() => {
      this.setState({ isLoggedIn: true, isLoading: false })
    }, 2000);
  };
  handleLogout = () => {
    this.setState({ isLoggedIn: false })
  }
  render() {
    const { isLoggedIn, isLoading } = this.state;
    return (
      <div className="panel">
        {isLoading ? (
          <Spinner size="50px" />
        ) : isLoggedIn ? (
          <Logout onLogout={this.handleLogout} />
        ) : (
          <Login onLogin={this.handleLogin} />
        )}
      </div>
    )
  }
}
export default Auth;