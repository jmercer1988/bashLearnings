// src/App.js

import React, { useState } from 'react';
import PlantGlossary from './PlantGlossary';
import PlantForm from './PlantForm';

const App = () => {
  const [userPlants, setUserPlants] = useState([]);

  const handleAddPlant = (plant) => {
    setUserPlants([...userPlants, plant]);
  };

  return (
    <div className="App">
      <PlantForm onAddPlant={handleAddPlant} />
      <div className="user-plants">
        <h2>Your Plants</h2>
        {userPlants.map((plant, index) => (
          <div key={index} className="plant-card">
            <h3>{plant.name}</h3>
          </div>
        ))}
      </div>
      <PlantGlossary />
    </div>
  );
};

export default App;