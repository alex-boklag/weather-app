import React from 'react';
import './Switcher.css';

export const Switcher = ({ units, handleSwitcherChange }) => {
    return (
        <section className="switcher-section">
            <select
                value={units}
                onChange={(ev) => handleSwitcherChange(ev.target.value)}
            >
                <option value="imperial">℉</option>
                <option value="metric">℃</option>
            </select>
        </section>
    );
}