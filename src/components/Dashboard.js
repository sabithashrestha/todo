import React, { Component } from "react";
// import Instascan from "instascan";
// import HomePage from "./HomePage";
import PersonalDaily from "./PersonalDaily";
import PersonalWeekly from "./PersonalWeekly";
import PersonalMonthly from "./PersonalMonthly";
import All from "./All";
import doAttendence from "./doAttendence";
// import "./scss/home/home.scss";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);

    this.state = {
      isLoggedIn: document.cookie.split("isLoggedIn=")[1],
      visible: "dashboard"
    };
  }

  handleLogOut = () => {
    document.cookie = "isLoggedIn=false";
    alert("logged out");
    window.location.reload();
  };

  render() {
    return (
      <div className="dashboard">
        <header className="dashboard_header">
          <h1>Dashboard</h1>
          <h4>
            Hello,{JSON.parse(localStorage.getItem("userDetail")).username}
          </h4>
          <button onClick={this.handleLogOut}>LogOut</button>
        </header>
        {this.state.visible === "dashboard" && (
          <div className="dashboard_content">
            <div>
              <button onClick={() => doAttendence()}>Take Attendence</button>
              {/* <video id="preview" /> */}
            </div>
            <div className="dashboard_reports">
              <h1>Reports</h1>
              <div className="dashboard_btns">
                <button
                  onClick={() =>
                    this.setState({
                      visible: "daily"
                    })
                  }
                >
                  Personal Daily
                </button>
                <button
                  onClick={() =>
                    this.setState({
                      visible: "weekly"
                    })
                  }
                >
                  Personal Weekly
                </button>
                <button
                  onClick={() =>
                    this.setState({
                      visible: "monthly"
                    })
                  }
                >
                  Personal Monthly
                </button>
                <button
                  onClick={() =>
                    this.setState({
                      visible: "all"
                    })
                  }
                >
                  All
                </button>
              </div>
            </div>
          </div>
        )}
        {this.state.visible === "daily" && <PersonalDaily />}
        {this.state.visible === "weekly" && <PersonalWeekly />}
        {this.state.visible === "monthly" && <PersonalMonthly />}
        {this.state.visible === "all" && <All />}
      </div>
    );
  }
}

export default Dashboard;
