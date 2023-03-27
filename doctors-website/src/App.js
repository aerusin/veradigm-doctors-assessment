import React, { useState } from "react";
import "./App.css";
import doctors from "./doctors";

function App() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleClick = (index) => {
    setSelectedDoctor(doctors[index]);
  };

  return (
    <div className="App">
      <h1>List of Doctors</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialty</th>
            <th>Location</th>
            <th>Review Score</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={index} onClick={() => handleClick(index)}>
              <td>{doctor.name}</td>
              <td>{doctor.specialty}</td>
              <td>{doctor.location}</td>
              <td>{doctor.reviewScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
