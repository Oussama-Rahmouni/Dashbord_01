const App = () => {
    const [data, setData] = useState({
      consommation: 10463.98,
      phase1: {
        consoHeure: 0.0,
        tension: 238.4,
        courant: 0.99,
      },
      phase2: {
        consoHeure: 0.0,
        tension: 235.2,
        courant: 0.99,
      },
      phase3: {
        consoHeure: 0.0,
        tension: 242.3,
        courant: 0.99,
      },
    });
  
    return (
      <div className="container">
        <h1>Consommation électrique</h1>
        <div className="data">
          <p>Consommation totale: {data.consommation} kWh</p>
          <p>Phase 1:</p>
          <ul>
            <li>Consommation instantanée: {data.phase1.consoHeure} kWh</li>
            <li>Tension: {data.phase1.tension} V</li>
            <li>Courant: {data.phase1.courant} A</li>
          </ul>
          <p>Phase 2:</p>
          <ul>
            <li>Consommation instantanée: {data.phase2.consoHeure} kWh</li>
            <li>Tension: {data.phase2.tension} V</li>
            <li>Courant: {data.phase2.courant} A</li>
          </ul>
          <p>Phase 3:</p>
          <ul>
            <li>Consommation instantanée: {data.phase3.consoHeure} kWh</li>
            <li>Tension: {data.phase3.tension} V</li>
            <li>Courant: {data.phase3.courant} A</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default App;
  