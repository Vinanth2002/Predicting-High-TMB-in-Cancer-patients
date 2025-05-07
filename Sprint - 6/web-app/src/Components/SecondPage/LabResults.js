import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import '../Styles/LabResSection.css';

const LabResults = ({ patientData }) => {
  const highTMBPatients = patientData.filter(patient => patient.TMB_Status === 'High');

  // Dropdown options for lab results
  const labOptions = ['Albumin', 'Bilirubin', 'Hematocrit', 'Hemoglobin', 'Calcium', 'Creatinine'];
  const [selectedLab, setSelectedLab] = useState(labOptions[0]);

  const getCategoryCounts = (data, labKey) => {
    const categories = { Normal: 0, Low: 0, High: 0, 'Very High': 0 };

    data.forEach(patient => {
      const value = patient[labKey];
      if (value === 0) categories.Normal += 1;
      else if (value === 1) categories.Low += 1;
      else if (value === 2) categories.High += 1;
      else if (value === 3) categories['Very High'] += 1;
    });

    return categories;
  };

  const categoryCounts = getCategoryCounts(highTMBPatients, selectedLab);

  const chartData = {
    labels: ['Normal', 'Low', 'High', 'Very High'],
    datasets: [
      {
        label: `Count of ${selectedLab} Levels`,
        data: Object.values(categoryCounts),
        backgroundColor: ['#5687F2', '#5687F2', '#5687F2', '#5687F2'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="labres-section-container">
      <div className="dropdown-container">
        <select
          value={selectedLab}
          onChange={(e) => setSelectedLab(e.target.value)}
          className="lab-select"
        >
          {labOptions.map((lab) => (
            <option key={lab} value={lab}>
              {lab.charAt(0).toUpperCase() + lab.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} style={{ marginTop: '13px' }}  />
    </div>
  );
};

export default LabResults;
