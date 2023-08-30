import React, { useState } from 'react';
import "./App.css";

const TOTAL_FLOORS = 3;
const PARKING_LOTS_PER_FLOOR = 5;

const App = () => {
  const [parkingLots, setParkingLots] = useState(parkingSystem());
  

  function parkingSystem() {
    const parkingLots = [];
    for (let floor = 0; floor < TOTAL_FLOORS; floor++) {
      const floorLots = [];
      for (let lot = 0; lot < PARKING_LOTS_PER_FLOOR; lot++) {
        floorLots.push({ occupied: false, type: 'car' }); // Default to car
      }
      parkingLots.push(floorLots);
    }
    return parkingLots;
  }

  function handleVahicle(floorIndex, lotIndex, type) {
    if (!parkingLots[floorIndex][lotIndex].occupied) {
      const updatedParkingLots = [...parkingLots];
      updatedParkingLots[floorIndex][lotIndex] = { occupied: true, type };
      setParkingLots(updatedParkingLots);
    }
  }
  

  return (
    <div className="app">
      <h1 className="parking-lot-status">Parking  System</h1>
      <div className="parking-lot-status">
        {parkingLots.map((floor, floorIndex) => (
          <div key={floorIndex} className="floor">
            {floor.map((lot, lotIndex) => (
              <div
                key={lotIndex}
                className={`parking-lot ${lot.occupied ? 'Booked' : 'Park Here'} ${lot.type}`}
              >
                {lot.occupied ? 'Booked' : 'Park Here'}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="vehicle-form">
        <h2>Park Vehicle</h2>
        {parkingLots.map((floor, floorIndex) => (
          <div key={floorIndex}>
            Floor {floorIndex + 1}:
            {floor.map((lot, lotIndex) => (
              <button
                key={lotIndex}
                onClick={() => handleVahicle(floorIndex, lotIndex, 'car')}
                disabled={lot.occupied} className='btn'
              >
                Park Vehicle
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
