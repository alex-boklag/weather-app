import React from 'react';
import './CityInfo.css';

export const CityInfo = ({ city: {name, coord} }) => {
    return (
        <section className="city-info-section">
            <h1>{name}</h1>
            <p>latitude: {coord.lat}, longitude: {coord?.lon}</p>
        </section>
    );
}