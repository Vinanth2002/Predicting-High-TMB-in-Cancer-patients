import React from 'react';
import '../Styles/CardsSection.css';

const getModeWithPercentage = (data, key) => {
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
      maxCount = count;
    }
  }

  const percentage = ((maxCount / data.length) * 100).toFixed(1);
  return { mode, percentage };
};

const SecondPageCards = ({ patientData }) => {
  const highTMBPatients = patientData.filter(patient => patient.TMB_Status === 'High');
  const totalHighTMBPatients = highTMBPatients.length;
  const totalPatients = patientData.length;

  const highTMBPercentage = ((totalHighTMBPatients / totalPatients) * 100).toFixed(1);

  const allPositiveBiomarkerCount = highTMBPatients.filter(patient => 
    patient.Biomarkers_1 === 'POSITIVE' &&
    patient.Biomarkers_2 === 'POSITIVE' &&
    patient.Biomarkers_3 === 'POSITIVE' &&
    patient.Biomarkers_4 === 'POSITIVE' &&
    patient.Biomarkers_5 === 'POSITIVE'
  ).length;
  const biomarkerPositivityIndex = ((allPositiveBiomarkerCount / totalHighTMBPatients) * 100).toFixed(1);

  // Ethnicity mode and its percentage for high TMB patients
  const { mode: dominantEthnicity, percentage: ethnicityPercentage } = getModeWithPercentage(highTMBPatients, "Ethnicity");

  // ECOG value mode and its percentage for high TMB patients
  const { mode: ecogValueMode, percentage: ecogValuePercentage } = getModeWithPercentage(highTMBPatients, "ECOG_Value");

  return (
    <div className="cards-section">
      <div className="card tmb-card">
        <p>{highTMBPercentage}% - ({totalHighTMBPatients}/{totalPatients})</p>
        <h3>High TMB Patients</h3>
      </div>
      <div className="card biomarker-card">
        <p>{biomarkerPositivityIndex}%</p>
        <h3>Biomarker Positivity Index</h3>
      </div>
      <div className="card ethnicity-card">
        <p>{dominantEthnicity} ({ethnicityPercentage}%)</p>
        <h3>Global Patient Distribution</h3>
      </div>
      <div className="card ecog-card">
        <p>{ecogValueMode} ({ecogValuePercentage}%)</p>
        <h3>ECOG Dominance Index</h3>
      </div>
    </div>
  );
};

export default SecondPageCards;
