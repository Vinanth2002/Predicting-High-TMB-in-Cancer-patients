import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '../Styles/TMBSection.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const TMBSection = ({ patientData }) => {
  const tmbCounts = patientData.reduce(
    (counts, patient) => {
      if (patient.TMB_Status === 'High') counts.high++;
      else if (patient.TMB_Status === 'Low') counts.low++;
      return counts;
    },
    { high: 0, low: 0 }
  );

  const data = {
    labels: ['High', 'Low'],
    datasets: [
      {
        data: [tmbCounts.high, tmbCounts.low],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  // Render the Doughnut chart
  return (
    <div className="tmb-section-container">
      <h3>TMB Status</h3>
      <div className="doughnut-chart">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default TMBSection;
