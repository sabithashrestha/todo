import React, { Component } from "react";

class LogInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      email: null,
      password: null
      // arr: ["kfsjdf", "lfksdjfl", "jfskldj"]
    };

    this.handleLogIn = this.handleLogIn.bind(this);
  }

  handleLogIn = () => {
    const { email, password } = this.state;

    const mainDB = JSON.parse(localStorage.getItem("mainDB")) || [];
    const selectedUser = mainDB.find(e => e.email === email); // returns boolean value
    if (selectedUser) {
      if (selectedUser.password === password && selectedUser.password != null) {
        document.cookie = `isLoggedIn=true; expires=Sun, 20 Jul 3567 06:23:41 GMT`;
        localStorage.setItem("userDetail", JSON.stringify(selectedUser));
        alert("Login Success");
        window.location.reload();
      }
    } else {
      alert("Authentication Failed");
    }
  };
  render() {
    return (
      <div className="login">
        {/* {this.state.arr.map((one, key) => (
          <div key={key}>{one}</div>
        ))} */}
        <h2>Log In</h2>
        <div className="login_inputs">
          <p> Email Address:</p>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={e => this.setState({ email: e.currentTarget.value })}
          />
          <p>Password:</p>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={e => this.setState({ password: e.currentTarget.value })}
          />
          <button name="Log In" onClick={this.handleLogIn}>
            Log In
          </button>
        </div>
      </div>
    );
  }
}

export default LogInPage;
