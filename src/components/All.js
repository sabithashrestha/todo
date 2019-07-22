import React, { Component } from "react";

class All extends Component {
  constructor(props) {
    super(props);

    const attendanceDB = JSON.parse(localStorage.getItem("attendanceDB")) || [];
    // console.log(attendanceDB);
    const today = new Date();
    // const dtime = attendanceDB.filter(e => e.time === today);
    // console.log(dtime);
    const dataToTabulate = [];
    attendanceDB.forEach(att => {
      const b = new Date(att.time);
      const uEmail = att.email;
      // console.log(uEmail);
      // console.log(b);
      if (b.getDate() === today.getDate()) {
        const date =
          b.getFullYear() + "/" + (+b.getMonth() + 1) + "/" + b.getDate();
        const time = att.time.split(" ")[4];
        dataToTabulate.push({ uEmail, date, time });
      }
      // const dtime = attendanceDB.filter(e => e.time === today);
      // console.log(dtime);
    });
    this.state = {
      dataToTabulate
    };
  }

  render() {
    return (
      <div>
        <div className="all">
          <table>
            <thead>
              <tr>
                <th>Email</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {this.state.dataToTabulate.map((row, index) => (
                <tr key={index}>
                  <td>{row.uEmail} </td>
                  <td>{row.date}</td>
                  <td>{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default All;
