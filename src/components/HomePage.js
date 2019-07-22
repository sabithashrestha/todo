import React, { Component } from "react";
import SignUpPage from "./SignUpPage";
import LogInPage from "./LogInPage";
import Dashboard from "./Dashboard";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: "signup",
      isLoggedIn: document.cookie.split("isLoggedIn=")[1] //returns the second element of an array by splitting with "isLoggedIn=" i.e. boolean value
    };
  }

  render() {
    return (
      <div className="homepage">
        {this.state.isLoggedIn === "true" ? (
          <Dashboard />
        ) : (
          <div className="homepage_contents">
            <div className="homepage_box">
              <button
                type="button"
                name="Sign Up"
                onClick={() => this.setState({ visible: "signup" })}
              >
                Sign Up
              </button>
              <button
                type="button"
                name="Log In"
                onClick={() => this.setState({ visible: "login" })}
              >
                Log In
              </button>{" "}
              <button
                type="button"
                name="Log Out"
                onClick={() => {
                  document.cookie = "isLoggedIn=false";
                  alert("logged out");
                }}
              >
                Log Out
              </button>
            </div>
            <div className="homepage_visible">
              {this.state.visible === "signup" && <SignUpPage />}
              {this.state.visible === "login" && <LogInPage />}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default HomePage;
