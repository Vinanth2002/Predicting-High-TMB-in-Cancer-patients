import React from 'react';
import '../Styles/RaceTable.css';

const RaceTable = ({ patientData }) => {
  const raceCounts = patientData.reduce((counts, patient) => {
    const race = patient.Race;
    if (race) {
      counts[race] = (counts[race] || 0) + 1;
    }
    return counts;
  }, {});

  const races = ['White', 'African', 'Asian', 'Latino', 'Other Race'];

  return (
    <div className="race-table-container">
      <h3>Race Type Counts</h3>
      <table className="race-table">
        <thead>
          <tr>
            <th>Race</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {races.map((race) => (
            <tr key={race}>
              <td>{race}</td>
              <td>{raceCounts[race] || 0}/{patientData.length}</td> {/* Default to 0 if no count */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RaceTable;
