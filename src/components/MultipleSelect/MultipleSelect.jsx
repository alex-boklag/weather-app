import React from 'react';
import './MultipleSelect.css';

export const MultipleSelect = ({
    temperature,
    maxTemp,
    minTemp,
    pressure,
    humidity,
    visibility,
    handleMultipleSelectChange
}) => {
    return (
        <section className="multiple-select-section">
            <p>
                <input
                    type="checkbox"
                    value="temperature"
                    checked={temperature}
                    onChange={(ev) => handleMultipleSelectChange(ev.target.value)}
                />
                temperature
            </p>
            <p>
                <input
                    type="checkbox"
                    value="maxTemp"
                    checked={maxTemp}
                    onChange={(ev) => handleMultipleSelectChange(ev.target.value)}
                />
                max temp.
            </p>
            <p>
                <input
                    type="checkbox"
                    value="minTemp"
                    checked={minTemp}
                    onChange={(ev) => handleMultipleSelectChange(ev.target.value)}
                />
                min temp.
            </p>
            <p>
                <input
                    type="checkbox"
                    value="pressure"
                    checked={pressure}
                    onChange={(ev) => handleMultipleSelectChange(ev.target.value)}
                />
                pressure
            </p>
            <p>
                <input
                    type="checkbox"
                    value="humidity"
                    checked={humidity}
                    onChange={(ev) => handleMultipleSelectChange(ev.target.value)}
                />
                humidity
            </p>
            <p>
                <input
                    type="checkbox"
                    value="visibility"
                    checked={visibility}
                    onChange={(ev) => handleMultipleSelectChange(ev.target.value)}
                />
                visibility
            </p>
        </section>
    );
}