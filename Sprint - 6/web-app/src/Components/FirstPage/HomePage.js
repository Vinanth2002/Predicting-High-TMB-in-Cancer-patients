import React from 'react';
import '../Styles/HomePage.css';
import Sidebar from './Sidebar';
import TopNavbar from './TopNavbar';
import CardsSection from './CardsSection.js';
import FilterSection from './FilterSection';
import TMBSection from './TMBSection.js';
import ChartsSection from './ChartsSection';
import RaceTable from './RaceTable';
import PatientTable from './PatientTable';
import DataSheet from './DataSheet.js';

const HomePage = () => {
  const { patientData } = DataSheet();

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-content">
        <TopNavbar />
        <div className="content-wrapper">
          <CardsSection patientData={patientData} />
          <div className="sections-container">
            <FilterSection patientData={patientData} />
            <TMBSection patientData={patientData} />
            <ChartsSection patientData={patientData} />
          </div>
          <div className="sections-container">
            <RaceTable patientData={patientData} />
            <PatientTable patientData={patientData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
