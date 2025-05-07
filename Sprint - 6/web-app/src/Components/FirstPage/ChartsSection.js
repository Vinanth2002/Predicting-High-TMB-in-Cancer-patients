import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import '../Styles/ChartsSection.css';

// Register the necessary components for the bar chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartsSection = ({ patientData }) => {
  if (!patientData || patientData.length === 0) {
    return <p>Loading data...</p>;
  }

  const ageBins = ["20-30", "30-40", "40-50", "50-60", "60-70", "70-80", "80-90"];
  const ageRanges = [
    [20, 30],
    [30, 40],
    [40, 50],
    [50, 60],
    [60, 70],
    [70, 80],
    [80, 90]
  ];

  const ageCounts = ageRanges.map(([min, max]) =>
    patientData.filter((patient) => patient.Age >= min && patient.Age < max).length
  );

  const data = {
    labels: ageBins,
    datasets: [
      {
        label: 'Patient Count',
        data: ageCounts,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Age Range'
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Patients'
        }
      }
    }
  };

  return (
    <div className="charts-section-container">
      <h3>Age Distribution</h3>
      <Bar data={data} options={options} style={{ marginTop: '-5px' }} />
    </div>
  );
};

export default ChartsSection;
