import React from 'react';
import '../Styles/HomePage.css';
import Sidebar from '../FirstPage/Sidebar';
import TopNavbar from '../FirstPage/TopNavbar';
import SecondPageCards from './SecondPageCards.js';
import LabResults from './LabResults.js';
import ChartsSection from '../FirstPage/ChartsSection';
import Biomarkers from './Biomarkers.js';
import Practicetype from './Practicetype.js';
import SmokingStatus from './SmokingStatus.js';
import DataSheet from '../FirstPage/DataSheet.js';

const PageSecond = () => {
  const { patientData } = DataSheet();

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-content">
        <TopNavbar />
        <div className="content-wrapper">
          <SecondPageCards patientData={patientData} />
          <div className="sections-container">
            <LabResults patientData={patientData} />
            <ChartsSection patientData={patientData} />
          </div>
          <div className="sections-container">
            <Biomarkers patientData={patientData} />
            <Practicetype patientData={patientData} />
            <SmokingStatus patientData={patientData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSecond;
