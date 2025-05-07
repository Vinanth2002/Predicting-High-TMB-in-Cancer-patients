import React from 'react';
import '../Styles/PatientTable.css';

// const patientData = [
//   { id: "#16", gender: "Male", race: "White", groupStage: "Stage IV", age: 66, practice: "Academic", tmbStatus: "High", histology: "Squamous" },
//   { id: "#17", gender: "Female", race: "Asian", groupStage: "Stage IIIB", age: 45, practice: "Community", tmbStatus: "Low", histology: "Non-Squamous" },
//   { id: "#18", gender: "Male", race: "White", groupStage: "Stage IA", age: 77, practice: "Community", tmbStatus: "High", histology: "NLCLC" },
//   { id: "#19", gender: "Male", race: "African", groupStage: "Stage IIA", age: 61, practice: "Community", tmbStatus: "Low", histology: "Squamous" },
//   { id: "#20", gender: "Female", race: "White", groupStage: "Stage IV", age: 88, practice: "Academic", tmbStatus: "High", histology: "Squamous" },
//   { id: "#21", gender: "Female", race: "Asian", groupStage: "Stage IIB", age: 48, practice: "Academic", tmbStatus: "Low", histology: "NSCLC" },
//   { id: "#22", gender: "Male", race: "African", groupStage: "Stage IV", age: 54, practice: "Academic", tmbStatus: "High", histology: "Non-Squamous" },
//   { id: "#23", gender: "Female", race: "Asian", groupStage: "Stage IIIA", age: 49, practice: "Community", tmbStatus: "Low", histology: "Non-Squamous" },
//   { id: "#24", gender: "Male", race: "White", groupStage: "Stage IIA", age: 71, practice: "Academic", tmbStatus: "Low", histology: "Non-Squamous" },
//   { id: "#25", gender: "Male", race: "White", groupStage: "Stage IV", age: 76, practice: "Academic", tmbStatus: "High", histology: "Squamous" },
//   { id: "#26", gender: "Male", race: "White", groupStage: "Stage IB", age: 83, practice: "Community", tmbStatus: "Low", histology: "Squamous" },
//   { id: "#27", gender: "Female", race: "Latino", groupStage: "Stage I", age: 47, practice: "Academic", tmbStatus: "Low", histology: "NSCLC" },
// ];

const PatientTable = ({ patientData }) => (
  <div className="patient-table-container">
    <h3>Patient Details</h3>
    <div className="patient-table-wrapper">
      <table className="patient-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Gender</th>
            <th>Race</th>
            <th>GroupStage</th>
            <th>Age</th>
            <th>Practice</th>
            <th>Histology</th>
            <th>TMB</th>
          </tr>
        </thead>
        <tbody>
          {patientData.map((patient) => (
            <tr key={patient.ID}>
              <td>{patient.ID}</td>
              <td>{patient.Gender}</td>
              <td>{patient.Race}</td>
              <td>{patient.GroupStage}</td>
              <td>{patient.Age}</td>
              <td>{patient.PracticeType}</td>
              <td>{patient.Histology}</td>
              <td>{patient.TMB_Status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default PatientTable;
