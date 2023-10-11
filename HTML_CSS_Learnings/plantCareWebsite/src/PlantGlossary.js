// src/plantglossary.js

import React from 'react';

const plants = [
    {
        name: 'Snake Plant',
        sunlight: 'Low to Medium',
        water: 'Every 2-3 weeks'
    },
    {
        name: 'Fiddle Leaf Fig',
        sunlight: 'Medium to Bright',
        water: 'When the top inch of soil is dry'
    }
    // ... more plants
];

const PlantGlossary = () => {
    return (
        <div class="glossary">
            <h2>Plant Glossary</h2>
            {plants.map((plant, index) => (
                <div key={index} className='plant-card'>
                    <h2>{plant.name}</h2>
                    <p>Sunlight: {plant.sunlight}</p>
                    <p>Water: {plant.water}</p>
                </div>
            ))}
        </div>
    );
};