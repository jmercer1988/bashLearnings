// src/plantForm.js
//this handles the submission from users to add more plant species to the glossary and their care tips

import React, { useState } from'react';

const PlantForm = ({onAddPlant}) => {
    const [plantName, setPlantName ] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddPlant({ name: plantName});
        setPlantName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Plant Name:
                <input
                type="text"
                value={plantName}
                onChange={(event) => setPlantName(event.target.value)}
                />
            </label>
            <button type="submit">Add Plant</button>
        </form>
    );
    };
    export default PlantForm;