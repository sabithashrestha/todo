import React, { Component } from "react";

class EntryMonthly extends Component {
  constructor(props) {
    super(props);
    // console.log(props.username, props.email);
    const dataOfThisUser = JSON.parse(
      localStorage.getItem("attendanceDB")
    ).filter(e => e.email === props.email);

    const dataToTabulate = [];
    dataOfThisUser.forEach(att => {
      const b = new Date(att.time);
      const date =
        b.getFullYear() + "/" + (+b.getMonth() + 1) + "/" + b.getDate();
      const time = att.time.split(" ")[4];

      const currentDate = new Date(); //Fri Jul 19 2019 10:58:43 GMT+0545 (Nepal Time)
      // const month = currentDate.getMonth(); //Jul => 6
      const oneMonthAgo = currentDate.setMonth(currentDate.getMonth - 1); //Jun => 5
      // if (currentDate.getMonth() == month) {
      //   currentDate.setDate(0);
      //   currentDate.setHours(0, 0, 0);
      //   currentDate.setMilliseconds(0);
      // }

      if (
        b.getMonth() < currentDate.getMonth() &&
        b.getMonth() > oneMonthAgo.getMonth()
      ) {
        dataToTabulate.push({ date, time });
      }
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

export default EntryMonthly;
