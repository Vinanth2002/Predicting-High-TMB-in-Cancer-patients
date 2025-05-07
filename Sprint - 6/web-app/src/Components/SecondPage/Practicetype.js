import React from 'react';
import '../Styles/Practicetype.css';
import { Bar } from 'react-chartjs-2';

const Practicetype = ({ patientData }) => {
  const highTMBPatients = patientData.filter(patient => patient.TMB_Status === 'High');

  const academicCount = highTMBPatients.filter(patient => patient.PracticeType === 'ACADEMIC').length;
  const communityCount = highTMBPatients.filter(patient => patient.PracticeType === 'COMMUNITY').length;

  const practiceTypeData = {
    labels: ['Academic', 'Community'],
    datasets: [
      {
        label: 'Practice Type',
        data: [academicCount, communityCount],
        backgroundColor: ['#5687F2', '#5687F2'],
      },
    ],
  };

  return (
    <div className="practicetype-section-container">
      <Bar data={practiceTypeData} options={{ maintainAspectRatio: false }} />
    </div>
  );
};

export default Practicetype;
