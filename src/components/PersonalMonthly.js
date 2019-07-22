import React, { Component } from "react";
import EntryMonthly from "./EntryMonthly";

class PersonalMonthly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainDB: JSON.parse(localStorage.getItem("mainDB")) || [],
      select: "btn",
      email: [],
      selectedUsername: null,
      selectedUserEmail: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const selectedUsername = e.currentTarget.innerText;
    const selectedUserEmail = this.state.mainDB.find(
      e => e.username === selectedUsername
    ).email; // returns the current users email

    this.setState({
      selectedUsername,
      selectedUserEmail
    });
    // console.log(selectedUserEmail, selectedUsername);
  }

  render() {
    return (
      <div className="daily">
        {this.state.select === "btn" && (
          <div>
            <h4>Select Person</h4>
            {this.state.mainDB.map((btn, i) => (
              <button key={i} onClick={this.handleClick}>
                {btn.username}
              </button>
            ))}
          </div>
        )}
        {this.state.selectedUserEmail && (
          //entrydaily ma email and username props ma pathaune
          <EntryMonthly
            email={this.state.selectedUserEmail}
            username={this.state.selectedUsername}
          />
        )}
      </div>
    );
  }
}
export default PersonalMonthly;
