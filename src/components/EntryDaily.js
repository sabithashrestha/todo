import React, { Component } from "react";

class EntryDaily extends Component {
  constructor(props) {
    super(props);
    // console.log(props.username, props.email);
    const dataOfThisUser = JSON.parse(
      localStorage.getItem("attendanceDB")
    ).filter(e => e.email === props.email);

    const dataToTabulate = [];
    dataOfThisUser.forEach(att => {
      const b = new Date(att.time); // returns in format like: Thu Jul 04 2019 16:17:27 GMT+0545 (Nepal Time)
      // console.log(b);
      const date =
        b.getFullYear() + "/" + (+b.getMonth() + 1) + "/" + b.getDate();
      // in js JAN = 0 hence to get JULY we add by 1
      // hence b.getMonth() + 1 gives 6 value i.e a integer
      const time = att.time.split(" ")[4];
      // value = "yesnoyesnoyesno"
      // value.split(" ")
      // yes no yes no yes no
      // value[0] gives yes
      dataToTabulate.push({ date, time });
    });

    this.state = {
      username: props.username,
      email: props.email,
      dataToTabulate
    };
  }

  render() {
    return (
      <div className="daily">
        <div>Personal Daily Report of: {this.state.username}</div>
        {/* {JSON.stringify(this.state.data)} */}

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Entry Time</th>
            </tr>
          </thead>
          <tbody>
            {this.state.dataToTabulate.map((row, index) => (
              <tr key={index}>
                <td>{row.date}</td>
                <td>{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EntryDaily;
