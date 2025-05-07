import React from 'react';
import '../Styles/CardsSection.css';

const getMode = (data, key) => {
  // Filter out any undefined or null values in the Ethnicity column
  const validValues = data.map(item => item[key]).filter(value => value);

  const counts = {};
  validValues.forEach(value => {
    counts[value] = (counts[value] || 0) + 1;
  });

  let mode = null;
  let maxCount = 0;
  for (const [key, count] of Object.entries(counts)) {
    if (count > maxCount) {
      maxCount = count;
      mode = key;
    }
  }
  return mode;
};


const CardsSection = ({ patientData }) => {
  const totalPatients = patientData.length;
  const averageAge = (patientData.reduce((sum, patient) => sum + patient.Age, 0) / totalPatients).toFixed(1);

  const maleCount = patientData.filter(patient => patient.Gender === 'Male').length;
  const malePercentage = ((maleCount / totalPatients) * 100).toFixed(1);

  const dominantEthnicity = getMode(patientData, "Ethnicity");

  return (
    <div className="cards-section">
      <div className="card tpatients">
        <p>{totalPatients}</p>
        <h3>Total Patients</h3>
      </div>
      <div className="card agecard">
        <p>{averageAge} years</p>
        <h3>Average Age</h3>
      </div>
      <div className="card malecard">
        <p>{malePercentage}%</p>
        <h3>Male %</h3>
      </div>
      <div className="card ethnicitycard">
        <p>{dominantEthnicity}</p>
        <h3>Regional Dominance</h3>
      </div>
    </div>
  );
};

export default CardsSection;
