import React, { useState } from 'react';
import '../Styles/Biomarkers.css';
import { Bar } from 'react-chartjs-2';

const Biomarkers = ({ patientData }) => {
  const highTMBPatients = patientData.filter(patient => patient.TMB_Status === 'High');

  const [selectedBiomarker, setSelectedBiomarker] = useState('Biomarkers_1');

  const generateBiomarkerData = (biomarker) => {
    const positiveCount = highTMBPatients.filter(patient => patient[biomarker] === 'POSITIVE').length;
    const negativeCount = highTMBPatients.filter(patient => patient[biomarker] === 'NEGATIVE').length;
    
    return {
      labels: ['Positive', 'Negative'],
      datasets: [
        {
          label: biomarker,
          data: [positiveCount, negativeCount],
          backgroundColor: ['#5687F2', '#5687F2'],
        },
      ],
    };
  };

  const biomarkerData = generateBiomarkerData(selectedBiomarker);

  return (
    <div className="bio-section-container">
      <div className="dropdown-container">
        <select
          className="biomarker-select"
          value={selectedBiomarker}
          onChange={(e) => setSelectedBiomarker(e.target.value)}
        >
          <option value="Biomarkers_1">Biomarker 1</option>
          <option value="Biomarkers_2">Biomarker 2</option>
          <option value="Biomarkers_3">Biomarker 3</option>
          <option value="Biomarkers_4">Biomarker 4</option>
          <option value="Biomarkers_5">Biomarker 5</option>
        </select>
      </div>
      <Bar data={biomarkerData} options={{ maintainAspectRatio: false }} style={{ marginTop: '20px' }} />
    </div>
  );
};

export default Biomarkers;