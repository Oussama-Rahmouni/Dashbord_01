// Report.jsx
import React, { useState } from 'react';
import Navbar from '../../component/navbar/Navbar';
import Sidebar from '../../component/sidebar/Sidebar';
import "./rapport.scss";

const Rapport = () => {
  const [reportData, setReportData] = useState({
    title: '',
    description: '',
    // Ajoutez d'autres champs de données du rapport ici
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReportData({
      ...reportData,
      [name]: value
    });
  };

  const saveReport = () => {
    console.log('Données du rapport enregistrées:', reportData);
  
  };

  const printReport = () => {
    window.print();
  };

  return (
    <div className="report">
      <Sidebar />
      <div className="reportContainer">
        <Navbar />
        <div className="content">
          <h1>Créer un nouveau rapport</h1>
          <form className="reportForm">
            <label htmlFor="title">Titre du rapport:</label>
            <input type="text" id="title" name="title" value={reportData.title} onChange={handleInputChange} />

            <label htmlFor="description">Description du rapport:</label>
            <textarea id="description" name="description" value={reportData.description} onChange={handleInputChange} />

            <div className="buttons">
              <button className="saveButton" onClick={saveReport}>Enregistrer le rapport</button>
              <button className="printButton" onClick={printReport}>Imprimer le rapport</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Rapport;
