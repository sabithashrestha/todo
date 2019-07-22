function doAttendance() {
  const code = prompt("Enter your attendance code");
  const mainDB = JSON.parse(localStorage.getItem("mainDB")) || [];
  const selectedUser = mainDB.find(e => e.email === code);
  if (selectedUser) {
    // console.log(selectedUser);
    const entry = { email: selectedUser.email, time: Date() };
    const attendanceDB = JSON.parse(localStorage.getItem("attendanceDB")) || [];
    attendanceDB.push(entry);
    localStorage.setItem("attendanceDB", JSON.stringify(attendanceDB));
  }
}

export default doAttendance;
