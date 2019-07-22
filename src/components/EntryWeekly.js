import React, { Component } from "react";

class EntryWeekly extends Component {
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
      // const current = currentDate.getDate(); //19
      //const oneWeekAgo = currentDate.setDate(currentDate.getDate() - 7); //1562909114715
      // 24*60*60*1000 = 86400000
      const oneWeekAgo = new Date(currentDate - 7 * 86400000); //Fri Jul 12 2019 10:58:43 GMT+0545 (Nepal Time)
      // console.log(oneWeekAgo.getDate()); // 12

      if (
        b.getDate() <= currentDate.getDate() &&
        b.getDate() > oneWeekAgo.getDate()
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

export default EntryWeekly;
