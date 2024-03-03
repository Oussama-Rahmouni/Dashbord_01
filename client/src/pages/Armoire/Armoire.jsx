import React from 'react';

const CribleJF100 = () => {
  return (
    
    <div className="crible-container">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
        <div key={num} className="circle-container">
          <div className="circle">{num}</div>
          <div className="rectangles-container">
            {[1, 2, 3, 4].map((rectNum) => (
              <div key={rectNum} className="rectangle-container">
                <button className="blue-button"></button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CribleJF100;