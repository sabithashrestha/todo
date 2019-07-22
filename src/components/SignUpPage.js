import React, { Component } from "react";

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      email: null,
      phone: null,
      password: null,
      address: null,
      dutyTime: null,
      gender: "female"
    };

    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp = () => {
    // console.log(this.state);
    alert("saved");
    const { username, email, phone, password, dutyTime, gender } = this.state;

    const oneUserData = {
      username,
      email,
      phone,
      password,
      dutyTime,
      gender
    };
    // JSON.parse => returns as an array format
    const mainDB = JSON.parse(localStorage.getItem("mainDB")) || [];
    // console.log(mainDB);
    mainDB.push(oneUserData);

    // store the values to the localStorage
    // JSON.stringify => returns as a string format
    localStorage.setItem("mainDB", JSON.stringify(mainDB));
  };

  render() {
    return (
      <div className="signup">
        <h2>Create Account</h2>
        <div className="signup_inputs">
          <p> Username:</p>
          <input
            type="text"
            name="username"
            required=""
            onChange={e => this.setState({ username: e.currentTarget.value })}
            placeholder="Username"
          />
          <p> Email Address:</p>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required=""
            onChange={e => this.setState({ email: e.currentTarget.value })}
          />
          <p> Phone number:</p>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required=""
            onChange={e => this.setState({ phone: e.currentTarget.value })}
          />
          <p>Password:</p>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required=""
            onChange={e => this.setState({ password: e.currentTarget.value })}
          />
          <p>Address:</p>
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={e => this.setState({ address: e.currentTarget.value })}
          />
          <p> Duty Time:</p>
          <input
            type="time"
            name="dutyTime"
            required=""
            onChange={e => this.setState({ dutyTime: e.currentTarget.value })}
          />
          <p>Gender:</p>
          <select
            name="gender"
            onChange={e => this.setState({ gender: e.currentTarget.value })}
          >
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
          <button name="Sign Up" onClick={this.handleSignUp}>
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
