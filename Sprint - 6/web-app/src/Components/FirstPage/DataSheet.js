import { useState, useEffect } from 'react';

const DataSheet = () => {
  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    fetch('/DummyPatientData.json')
      .then((response) => response.json())
      .then((data) => {
        setPatientData(data);
      })
      .catch((error) => console.error("Error loading patient data:", error));
  }, []);

  return { patientData, setPatientData };
};

export default DataSheet;
