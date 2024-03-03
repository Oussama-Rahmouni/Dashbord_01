const App = () => {
    const [data, setData] = useState({
      energyData: [
        {
          label: "Phase 1",
          data: [
            { x: 1, y: 250 },
            { x: 2, y: 200 },
            { x: 3, y: 150 },
            { x: 4, y: 100 },
            { x: 5, y: 50 },
          ],
        },
        {
          label: "Phase 2",
          data: [
            { x: 1, y: 240 },
            { x: 2, y: 190 },
            { x: 3, y: 140 },
            { x: 4, y: 90 },
            { x: 5, y: 40 },
          ],
        },
        {
          label: "Phase 3",
          data: [
            { x: 1, y: 230 },
            { x: 2, y: 180 },
            { x: 3, y: 130 },
            { x: 4, y: 80 },
            { x: 5, y: 30 },
          ],
        },
      ],
    });
  
    return (
      <div className="container">
        <h1>Consommation électrique</h1>
        <div className="chart">
          <LineChart
            data={data.energyData}
            xAccessor={(d) => d.x}
            yAccessor={(d) => d.y}
            colorAccessor={(d) => d.label}
          />
        </div>
      </div>
    );
  };
  
  export default App;
  