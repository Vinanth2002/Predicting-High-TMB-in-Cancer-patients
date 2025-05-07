import React from 'react';
import '../Styles/SmokingStatus.css';
import { Doughnut } from 'react-chartjs-2';

const SmokingStatus = ({ patientData }) => {
  const highTMBPatients = patientData.filter(patient => patient.TMB_Status === 'High');

  const smokingHistoryCount = highTMBPatients.filter(patient => patient.SmokingStatus === 'History of smoking').length;
  const noSmokingHistoryCount = highTMBPatients.filter(patient => patient.SmokingStatus === 'No history of smoking').length;

  const total = smokingHistoryCount + noSmokingHistoryCount;
  const smokingPercentage = ((smokingHistoryCount / total) * 100).toFixed(1);
  const noSmokingPercentage = ((noSmokingHistoryCount / total) * 100).toFixed(1);

  const smokingStatusData = {
    labels: [
      `Smoking Patients (${smokingPercentage}%)`,
      `Non Smokers (${noSmokingPercentage}%)`
    ],
    datasets: [
      {
        data: [smokingHistoryCount, noSmokingHistoryCount],
        backgroundColor: ['#5687F2', '#F5F5F5'],
        hoverBackgroundColor: ['#5687F2', '#F5F5F5'],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw} (${((tooltipItem.raw / total) * 100).toFixed(1)}%)`,
        },
      },
    },
  };

  return (
    <div className="smoking-section-container">
      <h3>Smoking Status Distribution</h3>
      <Doughnut data={smokingStatusData} options={options} />
    </div>
  );
};

export default SmokingStatus;
