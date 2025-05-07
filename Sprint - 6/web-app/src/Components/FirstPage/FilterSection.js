import React from 'react';
//import axios from 'axios';
import '../Styles/FilterSection.css';

const FilterSection = () => {
  // const handlePredict = async () => {
  //   try {
  //     const response = await axios.post("http://127.0.0.1:5000/predict", {
  //       message: "From react" // Example payload, update as needed
  //     }, {
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     });

  //     console.log("Response from server:", response.data);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  return (
    <div className="filter-section-container">
      <h3>Filters (will do later)</h3>
      <button>Predict</button>
      <select>
        <option>20-30</option>
        <option>30-40</option>
        <option>40-50</option>
      </select>
    </div>
  );
};

export default FilterSection;
